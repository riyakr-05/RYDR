import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Check, Car } from 'lucide-react';
import type { Vehicle } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  onClose,
  vehicle,
}) => {
  if (!vehicle) return null;

  const [date, setDate] = useState('2026-04-15');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [locationType, setLocationType] = useState<'home' | 'office' | 'atelier'>('home');
  const [address, setAddress] = useState('Bel Air Crest Rd, Los Angeles, CA 90077');
  const [notes, setNotes] = useState('Please bring Nordic Sage leather swatches.');
  const [confirmed, setConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Private Door-to-Door Test Drive"
      subtitle={`Experience the ${vehicle.name} in your everyday environment`}
      maxWidth="lg"
    >
      {confirmed ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-sage/30 border border-sage text-sage-text flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-sage-dark" />
          </div>
          <h4 className="font-serif text-2xl font-semibold text-plum">
            Reservation Confirmed
          </h4>
          <p className="text-xs text-plum-light max-w-md mx-auto leading-relaxed">
            Your private test drive for the <strong>{vehicle.name}</strong> has been secured for <strong>{date} at {timeSlot}</strong>. A RYDR Concierge Product Specialist will arrive in an enclosed transport with the preconditioned vehicle.
          </p>
        </div>
      ) : (
        <form onSubmit={handleBooking} className="space-y-5">
          {/* Vehicle Badge Bar */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-lavender/70 shadow-xs">
            <img
              src={vehicle.exteriorImage}
              alt={vehicle.name}
              className="w-16 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-semibold text-plum truncate">{vehicle.name}</h5>
              <p className="text-xs text-plum-light">{vehicle.acceleration} • {vehicle.propulsion}</p>
            </div>
            <Badge variant="sage" size="sm">
              Enclosed Delivery
            </Badge>
          </div>

          {/* Delivery Location Type */}
          <div>
            <label className="block text-xs font-semibold text-plum mb-1.5">
              Preferred Delivery Location
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'home', label: 'Private Residence' },
                { id: 'office', label: 'Executive Office' },
                { id: 'atelier', label: 'RYDR Atelier Suite' },
              ].map((loc) => (
                <button
                  type="button"
                  key={loc.id}
                  onClick={() => setLocationType(loc.id as any)}
                  className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all text-center cursor-pointer ${
                    locationType === loc.id
                      ? 'bg-lavender text-plum border-lavender-deep shadow-xs'
                      : 'bg-white text-plum-light border-lavender/60 hover:bg-ivory'
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Address Input */}
          {locationType !== 'atelier' && (
            <div>
              <label className="block text-xs font-semibold text-plum mb-1">
                Drop-Off Address
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-plum-muted" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-lavender/80 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-accent/30"
                  required
                />
              </div>
            </div>
          )}

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-plum mb-1">
                Select Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-plum-muted" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-lavender/80 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-accent/30"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-plum mb-1">
                Preferred Time Slot
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-plum-muted" />
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-lavender/80 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-accent/30"
                >
                  <option value="09:00 AM">09:00 AM (Morning Air)</option>
                  <option value="11:00 AM">11:00 AM (Midday Preview)</option>
                  <option value="02:30 PM">02:30 PM (Afternoon Highway)</option>
                  <option value="05:30 PM">05:30 PM (Sunset Canyon Drive)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bespoke Requests Note */}
          <div>
            <label className="block text-xs font-semibold text-plum mb-1">
              Bespoke Inquiries / Material Swatches to Bring
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full text-xs p-3 rounded-xl border border-lavender/80 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-accent/30 resize-none"
            />
          </div>

          {/* Action */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              icon={<Car className="w-4 h-4 text-peach" />}
            >
              Confirm White-Glove Test Drive
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
