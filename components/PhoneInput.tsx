"use client";

import PhoneInputLib, {
  isValidPhoneNumber,
  getCountryCallingCode,
  type Country,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Validation rules: expected digit count (without country code) per country
const DIGIT_RULES: Partial<Record<Country, number>> = {
  CD: 9, // +243
  CG: 9, // +242
  CM: 9, // +237
  CI: 10, // +225
  SN: 9, // +221
  GA: 7, // +241
  ML: 8, // +223
  BF: 8, // +226
  GN: 9, // +224
  TG: 8, // +228
  BJ: 8, // +229
  MG: 9, // +261
  FR: 9, // +33
  BE: 9, // +32
  CH: 9, // +41
  CA: 10, // +1
};

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function validatePhone(value: string | undefined): string | null {
  if (!value) return "Le numéro de téléphone est obligatoire.";
  if (!isValidPhoneNumber(value)) return "Numéro de téléphone invalide.";
  return null;
}

export function getPhoneDigitCount(country: Country): number | null {
  return DIGIT_RULES[country] ?? null;
}

export default function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  return (
    <div>
      <label
        htmlFor="telephone"
        className="block text-sm font-medium text-foreground/70 mb-1.5"
      >
        Numéro de téléphone *
      </label>
      <PhoneInputLib
        international
        defaultCountry="CD"
        value={value}
        onChange={(v) => onChange(v ?? "")}
        className="phone-input-wrapper w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus-within:border-red-primary focus-within:ring-1 focus-within:ring-red-primary"
      />
      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
