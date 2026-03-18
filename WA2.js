// server/utils/whatsappSender.js
const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');
require('dotenv').config();

/**
 * Envoie un message WhatsApp avec une image
 * @param {string} phoneNumber - Numéro de téléphone au format international avec @c.us (ex: 32492035082@c.us)
 * @param {string} imagePath - Chemin vers le fichier image à envoyer
 * @param {string} caption - Description de l'image
 * @returns {Promise<boolean>} - Succès ou échec de l'envoi
 */
module.exports = async (phoneNumber, imagePath, caption) => {
  try {
    // Vérifier que le fichier existe
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Le fichier n'existe pas: ${imagePath}`);
    }
    
    // Créer le FormData pour l'envoi du fichier
    const formData = new FormData();
    formData.append('chatId', phoneNumber);
    formData.append('caption', caption);
    formData.append('file', fs.createReadStream(imagePath));
    
    // Configuration des URLs WhatsApp API
    const apiUrl = process.env.WHATSAPP_API_URL;
    const idInstance = process.env.WHATSAPP_ID_INSTANCE;
    const apiTokenInstance = process.env.WHATSAPP_API_TOKEN;
    
    // URL complète pour l'envoi de fichiers
    const url = `${apiUrl}/waInstance${idInstance}/sendFileByUpload/${apiTokenInstance}`;
    
    // Faire la requête à l'API WhatsApp
    const response = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders()
      }
    });
    
    // Vérifier le statut de la réponse
    if (response.status === 200 && response.data && response.data.idMessage) {
      console.log(`Message WhatsApp envoyé avec succès: ${response.data.idMessage}`);
      return true;
    } else {
      console.error('Erreur lors de l\'envoi WhatsApp:', response.data);
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi WhatsApp:', error);
    return false;
  }
};