require("dotenv").config();

const chats = {
  sessions: "120363399238106941@g.us",
  debts: "120363401120497695@g.us",
  products: "120363402599172973@g.us",
};

module.exports = async (type, message) => {
  try {
    const data = await fetch(
      process.env.WHATSAPP_API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId: chats[type],
          message: message,
        }),
      }
    );
    
    // check if status 200
    if (data.status === 200) {
      return 1;
    }
  } catch (error) {
    console.log(error);
    return 0;
  }
};

Ici c'est pour les groupes.

Documentation complète:
SendMessage#
Test Postman Apidog

The method is used to sending a text message to a personal or a group chat. The message will be added to the send queue. Linked device not required when sending. Messages will be kept for 24 hours in the queue until instance will be authorized. The rate at which messages are sent from the queue is managed by Message sending delay parameter.

Video instruction#

Sending a message to yourself

When sending messages to your number or to a group with one participant, status of the message will be sent (one tick).

Request#
To send a text message, you have to execute a request at:

POST

{{apiUrl}}/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}
For apiUrl, idInstance and apiTokenInstance request parameters, refer to Before you start section.

Request parameters#
Parameter	Type	Mandatory	Description
chatId	string	Yes	Chat Id
message	string	Yes	Message text.
Emoji 😃 characters supported.
The maximum length of a text message is 20000 characters.
Text formatting should be done in accordance with the rules, specified in our article.
Requires UTF-8 encoding without BOM
quotedMessageId	string	No	Quoted message Id.
If present, the message will be sent quoting the specified chat message.
Quoting a message is only possible from the same chat to which it is sent.
To send messages from another chat, use the ForwardMessages method
linkPreview	boolean	No	The parameter includes displaying a preview and a description of the link. Enabled by default.
Accepts values: true/false
Link preview will not be added if it is more than 2MB
typePreview	string	No	Preview size. Possible values: large for a large preview and small for a small one
If typePreview: large and jpegThumbnail is passed instead of urlFile, then the link preview will be small
customPreview	object	No	Custom preview object
To send a message with a preview, we recommend that you read the article How to send a message with a preview.
typingTime	integer	No	Display the time of the message typing notification in the interlocutor's chat.
Time is limited by values ​​from 1000 to 20000 milliseconds (from 1 to 20 seconds).
Fields of the customPreview object:

Field	Type	Mandatory	Description
title	string	Yes	Preview title (up to 300 characters)
description	string	No	Description (up to 300 characters)
link	string	No	Site domain name with link (up to 300 characters). Must be duplicated in the message field.
urlFile	string	No	Link to image file to create a large preview. Recommended image format is jpeg
jpegThumbnail	string	No	Preview image in base64
Quoting messages

For the message quoting mechanism to work correctly, the system must know about the message that will be quoted. You can make sure that the message is available for quoting by requesting the journaling method getMessage, if the message is not in the system, then it is impossible to quote such a message.

To quote incoming messages, you must enable the setting Receive notifications about incoming messages and files.

To quote outgoing messages sent from a phone, enable the setting Receive notifications about messages sent from a phone.

This way, the messages will get into the system and they can be quoted. You can set up the settings using the SetSettings method or through your personal account.

Request body example#
Sending a message to a personal chat:


{
    "chatId": "79876543210@c.us",
    "message": "I use Green-API to send this message to you!"
}
Sending a message to a group chat:


{
    "chatId": "79876543210-1581234048@g.us",
    "message": "I use Green-API to send this message to you!"
}
Sending a quoted message:


{
    "chatId": "79876543210@с.us",
    "message": "I use Green-API to send this message to you!",
    "quotedMessageId": "361B0E63F2FDF95903B6A9C9A102F34B"
}
Sending a message with a large custom preview:


{
    "chatId": "79876543210@c.us",
    "message": "link 1: https://green-api.com/en/docs/api/sending/SendMessage/ \n link 2: https://green-api.com/en",
    "linkPreview": true,
    "typePreview": "large", 
    "customPreview": {
            "title": "Custom Preview",
            "description": "Wow!",
            "link": "https://green-api.com",
            "urlFile": "https://storage.yandexcloud.net/green-api.com/logo/Logo_GREEN-API.jpg"
    }
}
Sending a message with a small custom preview::


{
    "chatId": "79876543210@c.us",
    "message": "link 1: https://green-api.com/en/docs/api/sending/SendMessage/ \n link 2: https://green-api.com/en",
    "linkPreview": true,
    "typePreview": "small", 
    "customPreview": {
            "title": "Custom Preview",
            "description": "Wow!",
            "link": "https://green-api.com",
            "jpegThumbnail": "https://storage.yandexcloud.net/green-api.com/logo/Logo_GREEN-API.jpg"
    }
}
Response#
Response parameters#
Parameter	Type	Description
idMessage	string	Sent message Id
Response body example#

{
    "idMessage": "3EB0C767D097B7C7C030"
}
SendMessage errors#
For a list of errors common to all methods, refer to Common errors section

HTTP code	Error identifier	Description
400	Bad Request
Validation failed	Validation error
400	Validation failed.
Details: 'message' length must be less than or equal to 20000 characters long	The message text must be less than or equal to 20 000 characters
500	request entity too large	Json length exceeded (>100kb)
Sending with invalid Quoted message ID

If the quotedMessageId is specified incorrectly, the system will return code 200 and the id of the message, but it will not be delivered to the recipient.

Request examples#

Python
PHP
cURL
Java - Spring
Java - Unirest
VBA
Delphi

import requests

url = "{{apiUrl}}/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}"

payload = {
    "chatId": "79876543210@c.us",
    "message": "I use Green-API to send this message to you!"
}
headers = {
'Content-Type': 'application/json'
}

response = requests.post(url, json=payload, headers=headers)

print(response.text.encode('utf8'))
