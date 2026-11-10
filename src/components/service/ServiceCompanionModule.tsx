import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Battery, 
  Gauge, 
  Truck, 
  CheckCircle2, 
  FileText, 
  MapPin,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { CLIENT_PROFILE, MOCK_SERVICE_RECORDS } from '../../data/mockData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ServiceCompanionModule: React.FC = () => {
  const [valetRequested, setValetRequested] = useState(false);
  const [valetStep, setValetStep] = useState<'idle' | 'booked' | 'enroute'>('idle');

  const handleRequestValet = () => {
    setValetRequested(true);
    setValetStep('booked');
    setTimeout(() => {
      setValetStep('enroute');
    }, 2500);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Module Header Banner */}
      <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-lavender/80 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-plum">
                Service Companion
              </span>
              <Badge variant="sage" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5 text-sage-dark" />}>
                Telemetry Nominal
              </Badge>
              <Badge variant="lavender" size="sm">
                White-Glove Tier
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-plum-light max-w-2xl leading-relaxed">
              Real-time vehicle telemetry, predictive component health monitoring, and on-demand valet collection for {CLIENT_PROFILE.primaryVehicle.model}.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-xs text-plum-muted">Last synced 2 mins ago</span>
            <Button
              variant="lavender"
              size="sm"
              icon={<RefreshCw className="w-3.5 h-3.5 text-plum" />}
              onClick={() => alert("Telematics data refreshed: All systems nominal.")}
            >
              Sync Telemetry
            </Button>
          </div>
        </div>
      </div>

      {/* Real-Time Telematics & Diagnostics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Battery Health */}
        <div className="bg-white p-5 rounded-3xl border border-lavender/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-plum-muted uppercase tracking-wider">
              Battery Health
            </span>
            <Battery className="w-4 h-4 text-sage-dark" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-serif text-3xl font-bold text-plum">99%</span>
            <span className="text-xs font-medium text-sage-text">State of Health (SOH)</span>
          </div>
          <div className="w-full bg-ivory-200 h-2 rounded-full overflow-hidden mt-3">
            <div className="bg-sage-dark h-full rounded-full" style={{ width: '99%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-plum-muted mt-2">
            <span>Cell Temp: 23.4°C</span>
            <span>800V Architecture</span>
          </div>
        </div>

        {/* Tire Pressure Telematics */}
        <div className="bg-white p-5 rounded-3xl border border-lavender/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-plum-muted uppercase tracking-wider">
              Tire Pressure
            </span>
            <Gauge className="w-4 h-4 text-lavender-deep" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-serif text-3xl font-bold text-plum">36</span>
            <span className="text-xs font-medium text-plum-muted">PSI Avg (Cold)</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-plum font-medium">
            <div className="p-1.5 rounded-lg bg-ivory text-center">FL: 36 PSI</div>
            <div className="p-1.5 rounded-lg bg-ivory text-center">FR: 36 PSI</div>
            <div className="p-1.5 rounded-lg bg-ivory text-center">RL: 38 PSI</div>
            <div className="p-1.5 rounded-lg bg-ivory text-center">RR: 38 PSI</div>
          </div>
        </div>

        {/* Brake Pad Life */}
        <div className="bg-white p-5 rounded-3xl border border-lavender/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-plum-muted uppercase tracking-wider">
              Carbon Ceramic Wear
            </span>
            <ShieldCheck className="w-4 h-4 text-peach-dark" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-serif text-3xl font-bold text-plum">88%</span>
            <span className="text-xs font-medium text-peach-dark">Brake Pad Life</span>
          </div>
          <div className="w-full bg-ivory-200 h-2 rounded-full overflow-hidden mt-3">
            <div className="bg-peach-dark h-full rounded-full" style={{ width: '88%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-plum-muted mt-2">
            <span>Fluid Boiling Pt: 278°C</span>
            <span>Est. 28,000 mi remaining</span>
          </div>
        </div>

        {/* Firmware & Software */}
        <div className="bg-white p-5 rounded-3xl border border-lavender/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-plum-muted uppercase tracking-wider">
              OS Firmware
            </span>
            <Sparkles className="w-4 h-4 text-plum" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-serif text-3xl font-bold text-plum">v4.2</span>
            <span className="text-xs font-medium text-sage-text">Up to date</span>
          </div>
          <div className="mt-3 p-2 rounded-xl bg-ivory text-[11px] text-plum-light leading-snug">
            OTA patch installed March 2026. Adaptive aero logic improved.
          </div>
        </div>
      </div>

      {/* Interactive Valet Scheduling Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-lavender/80 shadow-soft space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-plum-muted block">
                White-Glove Valet Collection
              </span>
              <h3 className="font-serif text-2xl font-semibold text-plum">
                Schedule Atelier Service Dispatch
              </h3>
            </div>
            <Badge variant="plum" size="sm">
              Obsidian Privilege
            </Badge>
          </div>

          <p className="text-xs sm:text-sm text-plum-light leading-relaxed">
            A uniformed RYDR transport team will pick up your Spectre GT from your designated location in an enclosed climate-controlled carrier and provide a preconditioned replacement loaner.
          </p>

          {valetRequested ? (
            <div className="p-5 rounded-2xl bg-sage/30 border border-sage space-y-3">
              <div className="flex items-center gap-2 text-sage-dark font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-sage-dark" />
                <span>
                  {valetStep === 'booked' ? 'Valet Dispatch Confirmed!' : 'Driver Marcus Vance En Route in Enclosed Hauler'}
                </span>
              </div>
              <p className="text-xs text-sage-text">
                Scheduled for today at your Bel Air residence. Complimentary RYDR Lumina SUV loaner attached.
              </p>
              <div className="flex items-center gap-3 text-xs text-sage-dark font-medium pt-1">
                <span>ETA: 45 minutes</span>
                <span>•</span>
                <span>Carrier Plate: CA-RYDR-99</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-ivory border border-lavender/60">
                  <span className="text-[10px] text-plum-muted uppercase font-semibold block mb-1">
                    Pickup Location
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-plum">
                    <MapPin className="w-3.5 h-3.5 text-lavender-deep" />
                    <span>Bel Air Residence (Preset)</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-ivory border border-lavender/60">
                  <span className="text-[10px] text-plum-muted uppercase font-semibold block mb-1">
                    Loaner Vehicle
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-plum">
                    <Truck className="w-3.5 h-3.5 text-lavender-deep" />
                    <span>RYDR Lumina Executive Loaner</span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                fullWidth
                icon={<Truck className="w-4 h-4 text-peach" />}
                onClick={handleRequestValet}
              >
                Request Enclosed Valet Pickup
              </Button>
            </div>
          )}
        </div>

        {/* Primary Vehicle Info Card */}
        <div className="lg:col-span-5 bg-ivory rounded-3xl p-6 border border-lavender/80 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-plum-muted">
                Authorized Atelier
              </span>
              <span className="text-xs font-medium text-sage-text">Accredited 2026</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-plum mb-1">
              RYDR Atelier Beverly Hills
            </h4>
            <p className="text-xs text-plum-light mb-4">
              9600 Wilshire Blvd, Beverly Hills, CA 90212 • Master Technician Assigned: Henrik Lindqvist
            </p>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-lavender/60 mb-3">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
                alt="Atelier Service Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-plum font-semibold pt-3 border-t border-lavender/50">
            <span>Direct Line: (310) 555-RYDR</span>
            <span className="text-lavender-deep">Concierge Priority</span>
          </div>
        </div>
      </div>

      {/* Historical Maintenance Logbook */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-lavender/80 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-plum tracking-tight">
              Atelier Service Ledger
            </h3>
            <p className="text-xs text-plum-light">
              Cryptographically signed maintenance records ensuring pristine vehicle provenance
            </p>
          </div>
          <Badge variant="plum" size="sm" icon={<FileText className="w-3.5 h-3.5" />}>
            Verified Provenance
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-lavender/60 text-left text-[11px] text-plum-muted uppercase tracking-wider">
                <th className="py-3 px-3">Service Code</th>
                <th className="py-3 px-3">Description</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Odometer</th>
                <th className="py-3 px-3">Facility</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lavender/40">
              {MOCK_SERVICE_RECORDS.map((rec) => (
                <tr key={rec.id} className="hover:bg-ivory/50 transition-colors">
                  <td className="py-3 px-3 font-mono font-semibold text-plum">{rec.id}</td>
                  <td className="py-3 px-3 font-medium text-plum max-w-xs">{rec.service}</td>
                  <td className="py-3 px-3 text-plum-light">{rec.date}</td>
                  <td className="py-3 px-3 text-plum-light">{rec.mileage}</td>
                  <td className="py-3 px-3 text-plum-light">{rec.atelier}</td>
                  <td className="py-3 px-3">
                    <Badge variant={rec.status === 'Completed' ? 'sage' : 'lavender'} size="sm">
                      {rec.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
