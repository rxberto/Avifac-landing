import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
  Download,
  Send,
  Plus,
  Trash2,
  RefreshCw,
  Sparkles,
  DollarSign,
  ShieldAlert,
} from 'lucide-react';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export const InvoiceDemo = () => {
  const [activeTab, setActiveTab] = useState<'invoice' | 'recurring' | 'automation'>('invoice');
  const [clientName, setClientName] = useState('Acme Design Studio S.L.');
  const [currency, setCurrency] = useState<'EUR' | 'USD' | 'GBP'>('EUR');
  const [taxRate, setTaxRate] = useState(21);
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: 'Programa Formación UI/UX Senior Leader', quantity: 1, price: 2400 },
    { id: '2', description: 'Consultoría e Integración Facturación API', quantity: 2, price: 450 },
  ]);
  const [status, setStatus] = useState<'Paid' | 'Pending' | 'Draft'>('Paid');
  const [isCopied, setIsCopied] = useState(false);

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : '£';

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: 'Nuevo Servicio de Diseño / Consultoría',
      quantity: 1,
      price: 500,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleSimulateSend = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="demo" className="py-24 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-[#64CEFB] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Demostración En Vivo
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Facturación Inteligente y Transparente en Segundos
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Experimenta el generador interactivo de facturas de Avialo. Ajusta partidas, calcula impuestos automáticamente y exporta cumpliendo la normativa europea.
          </p>
        </div>

        {/* Tab Selector Buttons (shadcn style) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('invoice')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'invoice'
                  ? 'bg-neutral-800 text-white shadow-lg border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4 text-[#64CEFB]" />
              Factura Interactiva
            </button>
            <button
              onClick={() => setActiveTab('recurring')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'recurring'
                  ? 'bg-neutral-800 text-white shadow-lg border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <RefreshCw className="w-4 h-4 text-[#64CEFB]" />
              Cobros Recurrentes
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'automation'
                  ? 'bg-neutral-800 text-white shadow-lg border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Send className="w-4 h-4 text-[#64CEFB]" />
              Cobro Automático
            </button>
          </div>
        </div>

        {/* Demo Interactive Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-4 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 backdrop-blur-xl space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center justify-between">
              <span>Configuración Factura</span>
              <span className="text-xs font-mono text-[#64CEFB] bg-[#64CEFB]/10 px-2.5 py-1 rounded-md">
                INV-2026-089
              </span>
            </h3>

            {/* Client Name Input */}
            <div>
              <label className="block text-xs text-neutral-400 font-medium mb-2">
                Cliente / Empresa
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#64CEFB] transition-colors"
              />
            </div>

            {/* Currency & Tax Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-neutral-400 font-medium mb-2">Moneda</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#64CEFB]"
                >
                  <option value="EUR">EUR (€)</option>
                  <option value="USD">USD ($)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 font-medium mb-2">IVA (%)</label>
                <select
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#64CEFB]"
                >
                  <option value={21}>21% (Estándar)</option>
                  <option value={10}>10% (Reducido)</option>
                  <option value={0}>0% (Exento / Intracomunitaria)</option>
                </select>
              </div>
            </div>

            {/* Status Selector */}
            <div>
              <label className="block text-xs text-neutral-400 font-medium mb-2">Estado del Pago</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Paid', 'Pending', 'Draft'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatus(st)}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                      status === st
                        ? st === 'Paid'
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                          : st === 'Pending'
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                          : 'bg-neutral-800 text-neutral-300 border-neutral-700'
                        : 'bg-neutral-950 text-neutral-500 border-neutral-800 hover:text-white'
                    }`}
                  >
                    {st === 'Paid' ? 'Pagada' : st === 'Pending' ? 'Pendiente' : 'Borrador'}
                  </button>
                ))}
              </div>
            </div>

            {/* Add Line Item Action */}
            <button
              onClick={addItem}
              className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              <Plus className="w-4 h-4 text-[#64CEFB]" />
              Añadir Concepto de Factura
            </button>

            {/* Action simulation buttons */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={handleSimulateSend}
                className="flex-1 flex items-center justify-center gap-2 bg-[#64CEFB] hover:bg-[#52baeb] text-black font-semibold py-3 rounded-xl text-xs transition-all shadow-lg shadow-[#64CEFB]/20"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Factura Enviada !
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar al Cliente
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Live Preview Display Column */}
          <div className="lg:col-span-8 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            
            {/* Watermark / VeriFactu Compliance Tag */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black border border-neutral-700 flex items-center justify-center">
                  <img
                    src="https://avialo.es/logo.svg"
                    alt="Avialo"
                    className="h-5 w-auto filter brightness-0 invert"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">AVIALO SaaS</h4>
                  <p className="text-xs text-neutral-400">Facturación & Gestión Financiera</p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    status === 'Paid'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : status === 'Pending'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status === 'Paid'
                        ? 'bg-emerald-400 animate-pulse'
                        : status === 'Pending'
                        ? 'bg-amber-400 animate-pulse'
                        : 'bg-neutral-400'
                    }`}
                  />
                  {status === 'Paid' ? 'PAGADA' : status === 'Pending' ? 'PENDIENTE' : 'BORRADOR'}
                </span>
                <p className="text-[10px] text-neutral-500 mt-1 font-mono">VeriFactu ID: #8892-AZ</p>
              </div>
            </div>

            {/* Invoice Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-b border-neutral-800 text-xs">
              <div>
                <p className="text-neutral-500 font-medium">Facturado a</p>
                <p className="text-white font-semibold mt-1">{clientName || 'Cliente no especificado'}</p>
                <p className="text-neutral-400">NIF/CIF: B-98302194</p>
              </div>
              <div>
                <p className="text-neutral-500 font-medium">Fecha de Emisión</p>
                <p className="text-white font-semibold mt-1">30 Julio, 2026</p>
                <p className="text-neutral-400">Vencimiento: 30 días</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-neutral-500 font-medium">Método de Pago</p>
                <p className="text-[#64CEFB] font-semibold mt-1 flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> Direct Debit SEPA / Stripe
                </p>
              </div>
            </div>

            {/* Line Items Table */}
            <div className="py-6 space-y-3">
              <div className="grid grid-cols-12 text-xs font-semibold text-neutral-400 uppercase tracking-wider px-2 pb-2">
                <div className="col-span-6 sm:col-span-7">Concepto</div>
                <div className="col-span-2 text-center">Cant.</div>
                <div className="col-span-4 sm:col-span-3 text-right">Precio</div>
              </div>

              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-12 items-center bg-neutral-950/60 border border-neutral-800/80 rounded-xl p-3 text-xs gap-2"
                  >
                    <div className="col-span-6 sm:col-span-7 flex items-center gap-2">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        className="w-full bg-transparent text-white focus:outline-none focus:border-b border-[#64CEFB]"
                      />
                    </div>
                    <div className="col-span-2 text-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', Number(e.target.value))}
                        className="w-12 text-center bg-neutral-900 border border-neutral-700 rounded text-white focus:outline-none"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-3 flex items-center justify-end gap-2">
                      <span className="font-mono text-white font-semibold">
                        {currencySymbol}
                        {(item.quantity * item.price).toLocaleString()}
                      </span>
                      {items.length > 1 && (
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Calculations Summary */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col items-end gap-2 text-xs">
              <div className="w-full sm:w-64 flex justify-between text-neutral-400">
                <span>Base Imponible:</span>
                <span className="font-mono text-white">
                  {currencySymbol}
                  {subtotal.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="w-full sm:w-64 flex justify-between text-neutral-400">
                <span>IVA ({taxRate}%):</span>
                <span className="font-mono text-white">
                  {currencySymbol}
                  {taxAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="w-full sm:w-64 flex justify-between text-base font-bold text-white pt-2 border-t border-neutral-800">
                <span>Total Factura:</span>
                <span className="font-mono text-[#64CEFB] text-lg">
                  {currencySymbol}
                  {total.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            {/* Download / Print Bar */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                Firmada digitalmente con certificado eIDAS
              </span>
              <button
                onClick={() => alert('Descargando factura oficial en PDF...')}
                className="flex items-center gap-1.5 text-white hover:text-[#64CEFB] font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar PDF
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
