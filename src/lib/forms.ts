/** Configuración del formulario de contacto (sitio estático). */

export const formConfig = {
  /** Access Key pública de Web3Forms (no es un secreto; se ata a tu email). */
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
  endpoint: "https://api.web3forms.com/submit",
  subject: "Nuevo contacto desde estac.cl",
  fromName: "Estac Web",
  /** Límites anti-abuso en cliente (el proveedor también valida). */
  limits: {
    name: 120,
    email: 254,
    company: 160,
    role: 120,
    message: 4000,
  },
} as const;

export function isFormBackendConfigured() {
  return formConfig.accessKey.length > 0;
}
