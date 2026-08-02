import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { APP_URLS } from '../config/urls';
import {
  Code2,
  Terminal,
  Cpu,
  Webhook,
  ShieldCheck,
  Zap,
  ArrowRight,
  Check,
  Copy,
  Scale,
  RefreshCw,
  Server,
  Lock,
  Activity,
  Globe2,
  Key,
  Clock
} from 'lucide-react';

export const IntegracionApiPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'invoice' | 'webhook' | 'customer'>('invoice');
  const [activeLang, setActiveLang] = useState<'ts' | 'python' | 'curl' | 'php'>('ts');
  const [copied, setCopied] = useState(false);

  // Código real utilizando clientes HTTP estándar sin librerías inventadas
  const codeSnippets = {
    invoice: {
      ts: `// Emisión y certificación VeriFactu utilizando fetch estándar nativo en TypeScript/Node.js
const url = 'https://api.avialo.tech/v1/invoices/certify';
const apiKey = 'sk_test_avialo_719A29F...'; // Clave de entorno Sandbox

async function createAndCertifyInvoice() {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      customerTaxId: 'B88192019',
      customerName: 'Innovaciones Tecnológicas S.L.',
      items: [
        { description: 'Consultoría y Desarrollo Arquitectónico', quantity: 1, unitPrice: 1500.00, vatRate: 21 }
      ],
      generateVerifactuQr: true // Indica al motor de Avialo que firme y genere el QR oficial de Hacienda
    })
  });

  const data = await response.json();
  console.log('Estado HTTP:', response.status); // 200 OK
  console.log('Factura sellada:', data.invoiceNumber); // F-2026-0041
  console.log('URL Código QR AEAT:', data.verifactu.qrUrl);
  console.log('Hash Inalterable SHA-256:', data.verifactu.currentHash);
}

createAndCertifyInvoice();`,
      python: `# Emisión de factura con verificación VeriFactu utilizando la librería estándar 'requests' de Python
import requests

url = "https://api.avialo.tech/v1/invoices/certify"
api_key = "sk_test_avialo_719A29F..." # Clave del entorno Sandbox de pruebas

payload = {
    "customerTaxId": "B88192019",
    "customerName": "Innovaciones Tecnológicas S.L.",
    "items": [
        {
            "description": "Consultoría y Desarrollo Arquitectónico",
            "quantity": 1,
            "unitPrice": 1500.00,
            "vatRate": 21
        }
    ],
    "generateVerifactuQr": True # Firma criptográfica SHA-256 automática y envío a AEAT
}

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()

print(f"Estado HTTP: {response.status_code}")
print(f"Factura Certificada: {data['invoiceNumber']}")
print(f"URL Código QR AEAT: {data['verifactu']['qrUrl']}")
print(f"Hash Criptográfico SHA-256: {data['verifactu']['currentHash']}")`,
      curl: `curl -X POST https://api.avialo.tech/v1/invoices/certify \\
  -H "Authorization: Bearer sk_test_avialo_719A29F..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "customerTaxId": "B88192019",
    "customerName": "Innovaciones Tecnológicas S.L.",
    "items": [
      {
        "description": "Consultoría y Desarrollo Arquitectónico",
        "quantity": 1,
        "unitPrice": 1500.00,
        "vatRate": 21
      }
    ],
    "generateVerifactuQr": true
  }'`,
      php: `<?php
// Emisión VeriFactu mediante cURL nativo en PHP
$url = "https://api.avialo.tech/v1/invoices/certify";
$apiKey = "sk_test_avialo_719A29F...";

$payload = json_encode([
    "customerTaxId" => "B88192019",
    "customerName" => "Innovaciones Tecnológicas S.L.",
    "items" => [[
        "description" => "Consultoría y Desarrollo Arquitectónico",
        "quantity" => 1,
        "unitPrice" => 1500.00,
        "vatRate" => 21
    ]],
    "generateVerifactuQr" => true
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer " . $apiKey,
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$data = json_decode($response, true);
echo "Estado HTTP: " . $httpCode . "\n";
echo "QR AEAT: " . $data['verifactu']['qrUrl'] . "\n";
?>`
    },
    webhook: {
      ts: `// Verificación real de firma HMAC SHA-256 en Node.js usando el módulo nativo 'crypto'
import * as crypto from 'crypto';
import express from 'express';

const app = express();
const WEBHOOK_SECRET = 'whsec_avialo_live_secret_4892A...'; // Secreto de tu panel de integraciones

// Importante: parsear el cuerpo como raw para validar el hash criptográfico intacto
app.post('/webhook-endpoint', express.raw({ type: 'application/json' }), (req, res) => {
  const avialoSignature = req.headers['x-avialo-signature'] as string;
  
  if (!avialoSignature) {
    return res.status(400).send('Cabecera de firma X-Avialo-Signature no encontrada');
  }

  // Generamos el HMAC SHA-256 real para comprobar la autenticidad del emisor (Avialo)
  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(req.body)
    .digest('hex');

  if (!crypto.timingSafeEqual(Buffer.from(avialoSignature), Buffer.from(expectedSignature))) {
    console.error('Alerta de Seguridad: Firma HMAC inválida.');
    return res.status(401).send('Firma criptográfica inválida');
  }

  const event = JSON.parse(req.body.toString());

  if (event.type === 'invoice.verifactu_certified') {
    console.log('✅ Factura certificada legalmente en AEAT:', event.data.invoiceNumber);
    // Aquí puedes actualizar la base de datos de tu SaaS o CRM con la URL del QR
  }

  if (event.type === 'payment.reconciled') {
    console.log('💰 Cobro conciliado en el banco automáticamente:', event.data.amount, '€');
  }

  res.status(200).send('OK');
});`,
      python: `# Verificación nativa de firma HMAC SHA-256 en Python (Flask / FastAPI) usando los módulos estándar 'hmac' y 'hashlib'
import hmac
import hashlib
import json
from flask import Flask, request, jsonify

app = Flask(__name__)
WEBHOOK_SECRET = "whsec_avialo_live_secret_4892A...".encode("utf-8")

@app.route('/webhook-endpoint', methods=['POST'])
def handle_avialo_webhook():
    received_sig = request.headers.get("X-Avialo-Signature")
    if not received_sig:
        return jsonify({"error": "Cabecera X-Avialo-Signature ausente"}), 400

    # Cálculo criptográfico nativo en Python del HMAC SHA-256
    computed_sig = hmac.new(
        WEBHOOK_SECRET,
        msg=request.get_data(), # Raw payload en bytes
        digestmod=hashlib.sha256
    ).hexdigest()

    # Comparación segura contra ataques de temporización (timing attack)
    if not hmac.compare_digest(computed_sig, received_sig):
        print("🚨 Alerta: Intento de suplantación o firma incorrecta.")
        return jsonify({"error": "Firma HMAC no coincide"}), 401

    event = json.loads(request.get_data(as_text=True))

    if event.get("type") == "invoice.verifactu_certified":
        print(f"✅ Factura certificada por AEAT: {event['data']['invoiceNumber']}")
        print(f"QR de Hacienda: {event['data']['verifactu']['qrUrl']}")

    return jsonify({"status": "success"}), 200`,
      curl: `# Ejemplo real del payload JSON firmado y enviado por Avialo en cada petición Webhook POST:
# Cabecera incluida en la petición: 
# X-Avialo-Signature: a981c2f8217f093a8126b839126d2e8b... (HMAC SHA-256)

{
  "eventId": "evt_20260802_8891402",
  "object": "event",
  "type": "invoice.verifactu_certified",
  "timestamp": 1785686520,
  "data": {
    "invoiceId": "inv_9920194",
    "invoiceNumber": "F-2026-0041",
    "customerTaxId": "B88192019",
    "totalAmount": 1815.00,
    "verifactu": {
      "status": "CERTIFIED_AEAT",
      "qrUrl": "https://www2.agenciatributaria.gob.es/wlpl/TRAM-VERI/Verifactu?NIF=B26802249...",
      "currentHash": "61A8C92B409E2B18A7...290A81C",
      "previousHash": "99B72F18A30C19B2E4...882019A",
      "timestamp": "2026-08-02T18:01:22Z"
    }
  }
}`,
      php: `<?php
// Verificación real de firma HMAC SHA-256 en PHP nativo utilizando hash_hmac()
$webhookSecret = "whsec_avialo_live_secret_4892A...";
$rawPayload = file_get_contents('php://input');
$receivedSignature = $_SERVER['HTTP_X_AVIALO_SIGNATURE'] ?? '';

if (empty($receivedSignature)) {
    http_response_code(400);
    die('Cabecera X-Avialo-Signature requerida');
}

// Calculamos la firma criptográfica HMAC
$computedSignature = hash_hmac('sha256', $rawPayload, $webhookSecret);

// Verificación segura contra ataques de temporización (hash_equals)
if (!hash_equals($computedSignature, $receivedSignature)) {
    error_log("🚨 Alerta de seguridad: Firma Webhook inválida.");
    http_response_code(401);
    die('Firma HMAC inválida');
}

// El evento está verificado al 100% y procede de Avialo
$event = json_decode($rawPayload, true);

if ($event['type'] === 'invoice.verifactu_certified') {
    error_log("✅ Factura registrada legalmente: " . $event['data']['invoiceNumber']);
    // Procesa el cambio de estado en tu sistema de gestión
}

http_response_code(200);
echo json_encode(['status' => 'received']);
?>`
    },
    customer: {
      ts: `// Creación o actualización (Upsert) de cliente por NIF/CIF por REST nativo
const url = 'https://api.avialo.tech/v1/customers/upsert';
const apiKey = 'sk_test_avialo_719A29F...';

async function syncCustomer() {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      taxId: 'B88192019', // Si ya existe en tu catálogo, el sistema actualiza sus datos automáticamente
      legalName: 'Innovaciones Tecnológicas S.L.',
      email: 'contabilidad@innovaciones.es',
      billingAddress: {
        street: 'Avenida de la Gran Vía 120, Oficina 4B',
        city: 'Madrid',
        postalCode: '28013',
        country: 'ES'
      },
      preferredPaymentMethod: 'SEPA_DIRECT_DEBIT',
      paymentTermsDays: 30
    })
  });

  const customer = await res.json();
  console.log('Cliente sincronizado y validado:', customer.id);
}

syncCustomer();`,
      python: `# Creación / Sincronización de cliente por NIF en Python
import requests

url = "https://api.avialo.tech/v1/customers/upsert"

payload = {
    "taxId": "B88192019", # Si ya existe se actualizan los campos modificados
    "legalName": "Innovaciones Tecnológicas S.L.",
    "email": "contabilidad@innovaciones.es",
    "paymentTermsDays": 30
}

headers = {
    "Authorization": "Bearer sk_test_avialo_719A29F...",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print("Estado:", response.status_code)
print("Datos del cliente:", response.json())`,
      curl: `curl -X POST https://api.avialo.tech/v1/customers/upsert \\
  -H "Authorization: Bearer sk_test_avialo_719A29F..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "taxId": "B88192019",
    "legalName": "Innovaciones Tecnológicas S.L.",
    "email": "contabilidad@innovaciones.es",
    "paymentTermsDays": 30
  }'`,
      php: `<?php
// Sincronización de cliente en PHP vía cURL
$url = "https://api.avialo.tech/v1/customers/upsert";
$payload = json_encode([
    "taxId" => "B88192019",
    "legalName" => "Innovaciones Tecnológicas S.L.",
    "email" => "contabilidad@innovaciones.es",
    "paymentTermsDays" => 30
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer sk_test_avialo_719A29F...",
    "Content-Type: application/json"
]);

$result = curl_exec($ch);
curl_close($ch);
echo "Respuesta: " . $result;
?>`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab][activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Hoja de ruta (Roadmap) real y transparente sobre integración
  const connectivityStatus = [
    { name: 'API REST (Peticiones HTTP JSON)', type: 'Universal', status: 'Estable (Disponible Hoy)', badge: 'En Producción', isReady: true },
    { name: 'Webhooks con firma HMAC SHA-256', type: 'Eventos Push', status: 'Estable (Disponible Hoy)', badge: 'En Producción', isReady: true },
    { name: 'Colección oficial Postman / OpenAPI 3', type: 'Documentación', status: 'Disponible (Descarga Grátis)', badge: 'Actualizado v2.1', isReady: true },
    { name: 'Wrapper Node.js & TypeScript', type: 'SDK Cliente', status: 'En Desarrollo (Próximamente)', badge: 'Roadmap Q4 2026', isReady: false },
    { name: 'Wrapper Python & PHP', type: 'SDK Cliente', status: 'En Desarrollo (Próximamente)', badge: 'Roadmap Q4 2026', isReady: false },
    { name: 'Entorno Sandbox AEAT Aislado', type: 'Testing & Staging', status: 'Activo para todos los usuarios', badge: '100% Simulado', isReady: true },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080A09] text-[#0A0C0B] dark:text-white font-sans flex flex-col selection:bg-[rgb(52,138,46)]/20 selection:text-[rgb(52,138,46)] dark:selection:bg-[rgb(104,204,88)]/20 dark:selection:text-[rgb(104,204,88)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-24 overflow-x-hidden">
        
        {/* HERO SECTION FOR DEVELOPERS */}
        <section className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[3px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] text-xs sm:text-sm font-semibold tracking-wide uppercase border border-[rgb(52,138,46)]/20 dark:border-[rgb(104,204,88)]/20 shadow-sm">
            <Terminal className="size-4 shrink-0" />
            <span>{t('API REST & WEBHOOKS • VERIFACTU 2027', 'REST API & WEBHOOKS • VERIFACTU 2027')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-[#0A0C0B] dark:text-white">
            {t(
              'La API REST para integrar VeriFactu de forma transparente y sin fisuras',
              'The transparent REST API to integrate Spanish tax compliance seamlessly'
            )}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[rgba(10,12,11,0.72)] dark:text-white/70 font-medium leading-relaxed max-w-3xl mx-auto">
            {t(
              'Conecta cualquier software, ERP, tienda online o backend corporativo con Avialo mediante peticiones HTTP JSON estándar. Emite facturas electrónicas certificadas en la AEAT y automatiza flujos con Webhooks protegidos con firma HMAC SHA-256.',
              'Connect any existing enterprise system, e-commerce, or backend with Avialo via standard HTTP JSON requests. Issue AEAT-certified electronic invoices and automate workflows with HMAC SHA-256 signed webhooks.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={APP_URLS.register}
              className="w-full sm:w-auto px-7 py-3.5 rounded-[6px] bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] text-white dark:text-[#0A0C0B] font-bold text-sm sm:text-base hover:opacity-95 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <Zap className="size-5 fill-current shrink-0" />
              <span>{t('Obtener API Keys Gratis (Sandbox)', 'Get Free API Keys (Sandbox)')}</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#playground"
              className="w-full sm:w-auto px-7 py-3.5 rounded-[6px] bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 font-bold text-sm sm:text-base text-[#0A0C0B] dark:text-white hover:bg-[#E6E6E3]/40 dark:hover:bg-[#232326]/50 transition-all flex items-center justify-center gap-2"
            >
              <Code2 className="size-5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('Ver Ejemplo Interactivo', 'View Interactive Example')}</span>
            </a>
          </div>
        </section>

        {/* INTERACTIVE API PLAYGROUND */}
        <section id="playground" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="bg-[#111315] dark:bg-[#0D0F11] border border-[#303131] rounded-[8px] shadow-2xl overflow-hidden text-left">
            
            {/* Window Top Bar */}
            <div className="bg-[#191C1F] dark:bg-[#131618] border-b border-[#303131] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-white/60 ml-2 font-medium">avialo-api-rest-demo.ts</span>
              </div>

              {/* Endpoint Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto max-w-full no-scrollbar pb-1 sm:pb-0">
                <button
                  onClick={() => setActiveTab('invoice')}
                  className={`px-3 py-1.5 rounded-[4px] text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'invoice'
                      ? 'bg-[rgb(104,204,88)]/20 text-[rgb(104,204,88)] font-bold border border-[rgb(104,204,88)]/40'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-[rgb(104,204,88)] font-bold mr-1.5">POST</span>/v1/invoices/certify
                </button>
                <button
                  onClick={() => setActiveTab('webhook')}
                  className={`px-3 py-1.5 rounded-[4px] text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'webhook'
                      ? 'bg-[rgb(104,204,88)]/20 text-[rgb(104,204,88)] font-bold border border-[rgb(104,204,88)]/40'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-yellow-400 font-bold mr-1.5">HMAC</span>Verificar Firma Webhook
                </button>
                <button
                  onClick={() => setActiveTab('customer')}
                  className={`px-3 py-1.5 rounded-[4px] text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'customer'
                      ? 'bg-[rgb(104,204,88)]/20 text-[rgb(104,204,88)] font-bold border border-[rgb(104,204,88)]/40'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-sky-400 font-bold mr-1.5">POST</span>/v1/customers/upsert
                </button>
              </div>
            </div>

            {/* Language Selection & Copy Bar */}
            <div className="bg-[#15171B] dark:bg-[#0A0C0E] border-b border-[#303131] px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-2">
                {(['ts', 'python', 'curl', 'php'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 rounded-[3px] text-xs font-mono font-semibold transition-colors cursor-pointer ${
                      activeLang === lang
                        ? 'bg-white/10 text-white font-bold'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang === 'ts' ? 'TypeScript / Node' : lang === 'python' ? 'Python (requests)' : lang === 'curl' ? 'cURL HTTP' : 'PHP nativo'}
                  </button>
                ))}
              </div>
              
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] text-xs font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-white/10"
                title="Copiar código"
              >
                {copied ? <Check className="size-3.5 text-[rgb(104,204,88)]" /> : <Copy className="size-3.5" />}
                <span>{copied ? t('Copiado!', 'Copied!') : t('Copiar código', 'Copy code')}</span>
              </button>
            </div>

            {/* Code Block Content */}
            <div className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm text-emerald-300 bg-[#0E1012] overflow-x-auto leading-relaxed whitespace-pre selection:bg-[rgb(104,204,88)]/30">
              <code>{codeSnippets[activeTab][activeLang]}</code>
            </div>

            {/* Response Footer */}
            <div className="bg-[#191B1E] border-t border-[#303131] px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[rgb(104,204,88)] animate-ping" />
                <span className="text-xs font-mono text-white/80 font-bold">Respuesta estándar HTTP JSON • 200 OK (&lt; 45ms)</span>
                <span className="px-2 py-0.5 rounded-[3px] bg-[rgb(104,204,88)]/10 text-[rgb(104,204,88)] text-[10px] font-mono border border-[rgb(104,204,88)]/30">
                  VERIFACTU_SIGNED_SHA256
                </span>
              </div>
              <span className="text-xs font-mono text-white/50">
                {t('Cero dependencias obligatorias • Conexión HTTP pura', 'Zero obligatory dependencies • Pure HTTP connection')}
              </span>
            </div>

          </div>
        </section>

        {/* WEBHOOKS ARCHITECTURE SECTION - STRICTLY LEFT ALIGNED AS REQUESTED */}
        <section className="mb-20 sm:mb-28">
          <div className="text-left max-w-4xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] text-xs font-bold uppercase tracking-wide">
              <Webhook className="size-3.5 shrink-0" />
              <span>{t('NOTIFICACIONES BIDIRECCIONALES SEGURAS', 'SECURE BIDIRECTIONAL NOTIFICATIONS')}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0C0B] dark:text-white tracking-tight">
              {t(
                'Webhooks fiables, seguros y con reintentos automáticos',
                'Reliable, secure webhooks with automated exponential backoff'
              )}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed max-w-3xl">
              {t(
                'Elimina la necesidad de programar comprobaciones temporizadas en bucle (polling). Los servidores de Avialo envían una petición HTTP POST instantánea a tu punto de escucha cada vez que se certifica una factura en Hacienda o se concilia un cobro, firmando cada paquete criptográficamente para garantizar autenticidad total.',
                'Eliminate the need for costly scheduled polling loops. Avialo servers trigger instant HTTP POST requests directly to your listening endpoints whenever an invoice is tax-certified or a payment is bank-reconciled, cryptographically signing each payload for guaranteed authenticity.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 rounded-[8px] space-y-4 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-[6px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 flex items-center justify-center text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">
                  <Activity className="size-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A0C0B] dark:text-white">
                  {t('Eventos Granulares en Tiempo Real', 'Granular Real-Time Events')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                  {t(
                    'Subscríbete únicamente a los hitos que tu negocio necesita: invoice.verifactu_certified, payment.succeeded, subscription.failed o customer.updated. Activa tu lógica de negocio (liberar descargas, enviar correos o desbloquear licencias) al segundo.',
                    'Subscribe strictly to the events your architecture needs: invoice.verifactu_certified, payment.succeeded, or customer.updated. Trigger your downstream business logic instantly.'
                  )}
                </p>
              </div>
              <div className="pt-2 border-t border-[#D2D2CE] dark:border-[#303131] text-[11px] font-mono font-semibold text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] flex items-center gap-1.5">
                <Clock className="size-3.5" />
                <span>Latencia media de entrega: &lt; 80ms</span>
              </div>
            </div>

            <div className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 rounded-[8px] space-y-4 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-[6px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 flex items-center justify-center text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">
                  <Lock className="size-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A0C0B] dark:text-white">
                  {t('Firma Criptográfica HMAC SHA-256', 'HMAC SHA-256 Cryptographic Signature')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                  {t(
                    'Para evitar ataques de falsificación (spoofing o man-in-the-middle), cada petición Webhook contiene la cabecera HTTP X-Avialo-Signature generada con tu secreto único. Puedes comprobar la legitimidad del mensaje con 3 líneas de código nativo en tu servidor.',
                    'To block spoofing or replay attacks, every single Webhook request carries an HTTP X-Avialo-Signature header generated via your private secret. Validate legitimacy in 3 lines of native server code.'
                  )}
                </p>
              </div>
              <div className="pt-2 border-t border-[#D2D2CE] dark:border-[#303131] text-[11px] font-mono font-semibold text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" />
                <span>Seguridad Antibloqueo & Anti-spoofing</span>
              </div>
            </div>

            <div className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 rounded-[8px] space-y-4 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-[6px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 flex items-center justify-center text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">
                  <RefreshCw className="size-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A0C0B] dark:text-white">
                  {t('Reintentos Inteligentes hasta 72 Horas', 'Smart Retries up to 72 Hours')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                  {t(
                    '¿Tu servidor estaba reiniciándose o devolvió un código HTTP 500? Nuestro motor programa reintentos automáticos con retroceso exponencial durante 72 horas, registrando cada intento en un historial consultable con alertas al administrador de la cuenta.',
                    'Server temporarily offline or returned an HTTP 500? Our background engine schedules automated retries with exponential backoff over 72 hours, maintaining searchable audit logs.'
                  )}
                </p>
              </div>
              <div className="pt-2 border-t border-[#D2D2CE] dark:border-[#303131] text-[11px] font-mono font-semibold text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] flex items-center gap-1.5">
                <Check className="size-3.5" />
                <span>Tolerancia a fallos 99,99%</span>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ INTEGRAR NUESTRA API REST (SELL THE API & SECURITY WITH TRUTH AND CONFIDENCE) */}
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="px-2.5 py-1 rounded-[3px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] font-bold text-xs uppercase tracking-wider inline-block">
                {t('ESTRATEGIA PARA CTOs Y TECH LEADS', 'STRATEGY FOR CTOS & TECH LEADS')}
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A0C0B] dark:text-white tracking-tight leading-tight">
                {t(
                  'Tú desarrollas la lógica de tu negocio, nosotros garantizamos tu cumplimiento fiscal y criptográfico',
                  'You develop core product features, we guarantee tax & cryptographic compliance'
                )}
              </h2>

              <p className="text-sm sm:text-base text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                {t(
                  'Integrar la normativa española VeriFactu (Real Decreto 1007/2023) desde cero requiere meses de estudio de esquemas XML, gestión de certificados de Hacienda y algoritmos de encadenamiento de hash. Con la API de Avialo externalizas toda esta complejidad al instante en una infraestructura española robusta.',
                  'Building Spanish VeriFactu (Royal Decree 1007/2023) compliance from scratch consumes months studying XML schemas, AEAT certificate handling, and hash-chaining algorithms. Avialo offloads all this complexity to a robust Spanish cloud infrastructure.'
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-[4px] bg-[rgb(52,138,46)]/15 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] mt-0.5 shrink-0">
                    <Check className="size-4 font-bold" />
                  </div>
                  <div>
                    <strong className="text-sm sm:text-base text-[#0A0C0B] dark:text-white block">
                      {t('Cero Mantenimiento ante Cambios del BOE', 'Zero Maintenance when Tax Laws Evolve')}
                    </strong>
                    <span className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/70">
                      {t('Cuando la Agencia Tributaria actualiza sus servidores o especificaciones técnicas de factura electrónica, nuestro equipo actualiza el motor criptográfico en la nube al momento. Tu código JSON no sufre roturas ni Breaking Changes.', 'When tax regulators update specifications or server certificates, our cloud engine upgrades immediately in the background with zero breaking changes to your JSON payloads.')}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-[4px] bg-[rgb(52,138,46)]/15 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] mt-0.5 shrink-0">
                    <Lock className="size-4 font-bold" />
                  </div>
                  <div>
                    <strong className="text-sm sm:text-base text-[#0A0C0B] dark:text-white block">
                      {t('Seguridad Cifrada TLS 1.3 y Tokens Bearer', 'TLS 1.3 Encryption & Granular Bearer Tokens')}
                    </strong>
                    <span className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/70">
                      {t('Autenticación mediante cabeceras estándar HTTP Authorization Bearer con claves independientes para entorno de pruebas (sk_test) y producción (sk_live) con revocación en 1 clic.', 'Industry standard HTTP Authorization Bearer tokens separated clearly between testing (sk_test) and production (sk_live) environments with 1-click instant revocation.')}
                    </span>
                  </div>
                </div>
              </div>

              {/* MANDATORY SUPPORT SECTION */}
              <div className="p-4 sm:p-5 rounded-[8px] bg-[rgb(52,138,46)]/5 dark:bg-[rgb(104,204,88)]/5 border border-[rgb(52,138,46)]/30 dark:border-[rgb(104,204,88)]/30 flex items-center gap-4">
                <div className="p-3 rounded-[6px] bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] text-white dark:text-[#0A0C0B] shrink-0 shadow-sm">
                  <Scale className="size-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#0A0C0B] dark:text-white">
                    {t('Soporte en Vivo Especializado', 'Specialized Live Support')}
                  </h4>
                  <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/70 mt-0.5">
                    {t(
                      'Asistencia técnica directa por chat y canal de ingeniería en Discord para tus desarrolladores. Resolvemos dudas sobre formato JSON, validaciones de NIF y cabeceras de seguridad HMAC sin intermediarios.',
                      'Direct chat & Discord engineering support for your technical leads. We actively troubleshoot JSON structures, tax validations, and HMAC headers without bureaucracies.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Preview Box */}
            <div className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] rounded-[8px] p-6 sm:p-8 shadow-xl space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[rgba(10,12,11,0.72)] dark:text-white/70">
                  {t('MOTOR CRIPTOGRÁFICO AVIALO (SIF HOMOLOGADO)', 'AVIALO CRYPTO ENGINE (CERTIFIED SIF)')}
                </span>
                <span className="px-2 py-0.5 rounded-[3px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold">
                  {t('SHA-256 Activo', 'SHA-256 Active')}
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="p-3 sm:p-4 rounded-[6px] bg-[#E6E6E3]/40 dark:bg-[#232326]/50 border border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Server className="size-5 text-sky-500 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-bold">Tu Software / Backend / ERP</span>
                      <span className="text-[10px] text-[rgba(10,12,11,0.5)] dark:text-white/50 font-sans">Petición HTTPS REST en Node, Python, PHP o cURL</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-sky-500/20 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-[3px] font-bold">POST JSON</span>
                </div>

                <div className="flex justify-center text-[rgba(10,12,11,0.4)] dark:text-white/40">
                  <div className="h-6 w-0.5 bg-[rgb(52,138,46)]/50 dark:bg-[rgb(104,204,88)]/50" />
                </div>

                <div className="p-3 sm:p-4 rounded-[6px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 border-2 border-[rgb(52,138,46)] dark:border-[rgb(104,204,88)] flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <Cpu className="size-5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0 animate-pulse" />
                    <div className="flex flex-col font-sans">
                      <span className="font-extrabold text-[#0A0C0B] dark:text-white text-xs sm:text-sm">Motor de Cifrado Avialo (Ley 11/2021)</span>
                      <span className="text-[10px] text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] font-mono">Encadenamiento Hash + Sello XML AEAT + QR</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] text-white dark:text-[#0A0C0B] px-2 py-0.5 rounded-[3px] font-bold shrink-0">SHA-256</span>
                </div>

                <div className="flex justify-center text-[rgba(10,12,11,0.4)] dark:text-white/40">
                  <div className="h-6 w-0.5 bg-[rgb(52,138,46)]/50 dark:bg-[rgb(104,204,88)]/50" />
                </div>

                <div className="p-3 sm:p-4 rounded-[6px] bg-[#E6E6E3]/40 dark:bg-[#232326]/50 border border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="size-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div className="flex flex-col font-sans">
                      <span className="font-bold text-[#0A0C0B] dark:text-white text-xs sm:text-sm">Servidores Oficiales VeriFactu (AEAT)</span>
                      <span className="text-[10px] text-[rgba(10,12,11,0.5)] dark:text-white/50 font-mono">Registro inalterable y comprobación de integridad</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-[3px] font-bold shrink-0">QR & Hash Ok</span>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-[#D2D2CE] dark:border-[#303131]">
                <p className="text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 font-sans">
                  {t(
                    '🛡️ Garantizamos la inalterabilidad, legibilidad y trazabilidad obligatoria por ley',
                    '🛡️ We guarantee strict regulatory immutability, readability, and trace logging by law'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP Y COMPATIBILIDAD TRANSPARENTE - SIN MENTIRAS NI LIBRERÍAS FALSAS */}
        <section className="mb-20 sm:mb-28">
          <div className="bg-[#151816] dark:bg-[#111315] border border-[#303131] rounded-[8px] p-6 sm:p-10 lg:p-12 text-white">
            <div className="max-w-3xl mb-8 sm:mb-10 space-y-3 text-left">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[rgb(104,204,88)] block">
                {t('COMPATIBILIDAD REAL & ROADMAP TÉCNICO', 'REAL COMPATIBILITY & TECHNICAL ROADMAP')}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {t('Conexión HTTP REST universal sin obligarte a usar dependencias artificiales', 'Universal HTTP REST connection without forcing artificial dependencies')}
              </h2>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {t(
                  'En Avialo creemos en la transparencia técnica y en no prometer software que aún no se ha publicado. Actualmente puedes integrar tus sistemas en minutos con peticiones HTTP y Webhooks puros desde cualquier lenguaje. Además, te mostramos nuestro Roadmap de desarrollo oficial:',
                  'At Avialo we believe in complete engineering honesty—no vaporware or fictional packages. Today you can integrate in minutes using clean HTTP and pure Webhooks from any programming language. Below is our actual live Technical Roadmap:'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
              {connectivityStatus.map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#1C2023] border ${item.isReady ? 'border-emerald-500/40 hover:border-emerald-500/80' : 'border-white/10 hover:border-white/30'} rounded-[6px] p-4 sm:p-5 flex flex-col justify-between space-y-4 transition-all group`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 bg-white/5 px-2 py-0.5 rounded-[3px]">
                        {item.type}
                      </span>
                      <span className={`px-2 py-0.5 rounded-[3px] text-[10px] font-mono font-bold ${
                        item.isReady ? 'bg-[rgb(104,204,88)]/20 text-[rgb(104,204,88)] border border-[rgb(104,204,88)]/30' : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[rgb(104,204,88)] transition-colors pt-1">
                      {item.name}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 font-semibold text-white/80">
                      {item.isReady ? <Check className="size-3.5 text-emerald-400 shrink-0" /> : <Clock className="size-3.5 text-yellow-400 shrink-0" />}
                      <span>{item.status}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-[6px] bg-white/5 border border-white/10 text-xs text-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <Globe2 className="size-5 text-[rgb(104,204,88)] shrink-0" />
                <span>¿Programas en Go, Ruby, Rust o C# .NET? <strong>La API REST JSON te permite emitir facturas verificadas sin limitación de lenguaje.</strong></span>
              </div>
              <a
                href="#playground"
                className="px-4 py-1.5 rounded-[4px] bg-[rgb(104,204,88)] text-[#0A0C0B] font-bold shrink-0 hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Probar Peticiones REST
              </a>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA FOR DEVELOPERS */}
        <section className="bg-[#151816] dark:bg-[#111315] border border-[#303131] rounded-[8px] p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t(
                'Empieza a construir en el Sandbox gratis y sin tarjeta de crédito',
                'Start building in the Sandbox for free, no credit card required'
              )}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {t(
                'Obtén hoy tu clave API sk_test, prueba la emisión de facturas VeriFactu contra el simulador y verifica la recepción de tus webhooks HMAC en tiempo real.',
                'Get your sk_test API key today, simulate VeriFactu invoice submissions, and evaluate real-time HMAC webhooks immediately.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={APP_URLS.register}
                className="w-full sm:w-auto px-8 py-3.5 rounded-[6px] bg-[rgb(104,204,88)] text-[#0A0C0B] font-extrabold text-sm sm:text-base hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Key className="size-4 shrink-0" />
                <span>{t('Generar API Key de Prueba', 'Generate Test API Key')}</span>
                <ArrowRight className="size-4" />
              </a>
              <a
                href={APP_URLS.login}
                className="w-full sm:w-auto px-7 py-3.5 rounded-[6px] bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>{t('Ya tengo cuenta en Avialo', 'I already have an Avialo account')}</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
export default IntegracionApiPage;
