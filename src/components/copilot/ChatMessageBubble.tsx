import React from 'react';
import { Sparkles, Calendar, Calculator, Scale, ArrowRight } from 'lucide-react';
import type { ChatMessage, Vehicle } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { VehicleRecommendationCard } from './VehicleRecommendationCard';

interface ChatMessageBubbleProps {
  message: ChatMessage;
  onSelectPrompt: (prompt: string) => void;
  onCompare: (vehicles: Vehicle[]) => void;
  onCalculateFinance: (vehicle: Vehicle) => void;
  onBookTestDrive: (vehicle: Vehicle) => void;
}

export const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({
  message,
  onSelectPrompt,
  onCompare,
  onCalculateFinance,
  onBookTestDrive,
}) => {
  const isUser = message.sender === 'user';

  // Format simple markdown bold tags (**text**) into <strong>
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-plum">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={`flex gap-3.5 my-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Assistant Avatar */}
      {!isUser && (
        <div className="w-9 h-9 rounded-xl bg-ivory-200 border border-lavender-accent flex items-center justify-center shrink-0 shadow-soft">
          <Sparkles className="w-4 h-4 text-lavender-deep" />
        </div>
      )}

      {/* Bubble Container */}
      <div className={`max-w-2xl space-y-3 ${isUser ? 'items-end' : 'items-start'}`}>
        {/* Meta Bar */}
        <div className={`flex items-center gap-2 text-[11px] ${isUser ? 'justify-end text-plum-muted' : 'justify-start text-plum-light'}`}>
          {isUser ? (
            <span>You • {message.timestamp}</span>
          ) : (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-plum">RYDR Co-Pilot</span>
              <Badge variant="lavender" size="sm" className="text-[10px] py-0">
                Simulated Local Concierge
              </Badge>
              <span className="text-plum-muted">{message.timestamp}</span>
            </div>
          )}
        </div>

        {/* Message Body */}
        <div
          className={`p-4 sm:p-5 rounded-3xl text-sm leading-relaxed whitespace-pre-line ${
            isUser
              ? 'bg-plum text-ivory rounded-tr-sm shadow-soft'
              : 'bg-white/95 border border-lavender/90 text-plum-light rounded-tl-sm shadow-soft'
          }`}
        >
          {renderFormattedText(message.content)}
        </div>

        {/* Attached Comparison Preview */}
        {message.comparisonVehicles && message.comparisonVehicles.length >= 2 && (
          <div className="p-4 rounded-2xl bg-lavender/40 border border-lavender-accent/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-plum uppercase tracking-wider">
                Vehicle Comparison Matrix
              </span>
              <Badge variant="plum" size="sm">
                2 Models Ready
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {message.comparisonVehicles.map((v) => (
                <div key={v.id} className="p-2.5 rounded-xl bg-white border border-lavender/60 text-xs">
                  <img src={v.exteriorImage} alt={v.name} className="w-full h-16 object-cover rounded-lg mb-2" />
                  <p className="font-semibold text-plum truncate">{v.name}</p>
                  <p className="text-[11px] text-plum-light">${v.startingPrice.toLocaleString()}</p>
                </div>
              ))}
            </div>
            <Button
              variant="primary"
              size="sm"
              fullWidth
              icon={<Scale className="w-3.5 h-3.5 text-peach" />}
              onClick={() => onCompare(message.comparisonVehicles!)}
            >
              Open Side-by-Side Comparison Modal
            </Button>
          </div>
        )}

        {/* Attached Financing Calculator Preview */}
        {message.financingDetails && (
          <div className="p-4 rounded-2xl bg-white border border-peach-accent/70 shadow-soft space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-plum">
                Acquisition Breakdown • {message.financingDetails.vehicleName}
              </span>
              <Badge variant="peach" size="sm">
                Est. ${message.financingDetails.monthlyPayment}/mo
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-ivory">
                <span className="text-[10px] text-plum-muted block">Base Price</span>
                <span className="font-semibold text-plum">${message.financingDetails.vehiclePrice.toLocaleString()}</span>
              </div>
              <div className="p-2 rounded-lg bg-ivory">
                <span className="text-[10px] text-plum-muted block">Down Payment</span>
                <span className="font-semibold text-plum">${message.financingDetails.downPayment.toLocaleString()}</span>
              </div>
              <div className="p-2 rounded-lg bg-ivory">
                <span className="text-[10px] text-plum-muted block">Term</span>
                <span className="font-semibold text-plum">{message.financingDetails.termMonths} Months</span>
              </div>
            </div>
            {message.suggestedVehicles && message.suggestedVehicles[0] && (
              <Button
                variant="lavender"
                size="sm"
                fullWidth
                icon={<Calculator className="w-3.5 h-3.5" />}
                onClick={() => onCalculateFinance(message.suggestedVehicles![0])}
              >
                Customize Payment Terms & Down Payment
              </Button>
            )}
          </div>
        )}

        {/* Attached Test Drive Preview */}
        {message.testDriveVehicle && (
          <div className="p-4 rounded-2xl bg-white border border-sage/80 shadow-soft space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-plum block">
                  Private Enclosed Test Drive
                </span>
                <span className="text-[11px] text-plum-light">
                  {message.testDriveVehicle.name} delivered to your residence
                </span>
              </div>
              <Badge variant="sage" size="sm">
                Complimentary
              </Badge>
            </div>
            <Button
              variant="primary"
              size="sm"
              fullWidth
              icon={<Calendar className="w-3.5 h-3.5 text-peach" />}
              onClick={() => onBookTestDrive(message.testDriveVehicle!)}
            >
              Select Delivery Date & Address
            </Button>
          </div>
        )}

        {/* Attached Suggested Vehicles Cards */}
        {message.suggestedVehicles && message.suggestedVehicles.map((vehicle) => (
          <VehicleRecommendationCard
            key={vehicle.id}
            vehicle={vehicle}
            onCompare={() => onCompare([vehicle, message.suggestedVehicles!.find(v => v.id !== vehicle.id) || vehicle])}
            onCalculateFinance={onCalculateFinance}
            onBookTestDrive={onBookTestDrive}
          />
        ))}

        {/* Follow-up Prompts */}
        {message.suggestedFollowUps && message.suggestedFollowUps.length > 0 && (
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] uppercase font-semibold text-plum-muted tracking-wider block">
              Suggested Concierge Inquiries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {message.suggestedFollowUps.map((promptText, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectPrompt(promptText)}
                  className="text-xs px-3 py-1.5 rounded-full bg-ivory hover:bg-lavender/60 text-plum-light hover:text-plum border border-lavender/70 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>{promptText}</span>
                  <ArrowRight className="w-3 h-3 text-lavender-deep" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-9 h-9 rounded-xl bg-plum text-ivory font-serif text-xs font-semibold flex items-center justify-center shrink-0 shadow-soft">
          JV
        </div>
      )}
    </div>
  );
};
