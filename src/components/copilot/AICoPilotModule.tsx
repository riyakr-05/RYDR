import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  SlidersHorizontal, 
  RotateCcw
} from 'lucide-react';
import type { ChatMessage, PersonalizationFilters, Vehicle } from '../../types';
import { PROMPT_SUGGESTIONS, INITIAL_FILTERS, LUXURY_VEHICLES } from '../../data/mockData';
import { generateSimulatedResponse } from '../../data/copilotResponses';
import { ChatMessageBubble } from './ChatMessageBubble';
import { PersonalizationDrawer } from './PersonalizationDrawer';
import { VehicleComparisonModal } from './VehicleComparisonModal';
import { FinancingModal } from './FinancingModal';
import { TestDriveModal } from './TestDriveModal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface AICoPilotModuleProps {
  initialPrompt?: string;
}

export const AICoPilotModule: React.FC<AICoPilotModuleProps> = ({
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      timestamp: 'Just now',
      isSimulated: true,
      content: `Welcome to the **RYDR AI Buyer Co-Pilot**.\n\nI am your intelligent automotive concierge, calibrated with detailed telematics, bespoke atelier options, and real-time private portfolio acquisition terms.\n\nWhether you wish to compare electric grand tourers, review bespoke lease calculations, or arrange a private home viewing, how may I assist your automotive journey today?`,
      suggestedFollowUps: [
        "Quiet Long-Range Electric GT",
        "Compare Spectre GT vs Lumina SUV",
        "Calculate bespoke lease terms",
        "Book private home test drive"
      ]
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [filters, setFilters] = useState<PersonalizationFilters>(INITIAL_FILTERS);
  const [showFilters, setShowFilters] = useState(false);

  // Modals state
  const [comparisonVehicles, setComparisonVehicles] = useState<Vehicle[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const [financeVehicle, setFinanceVehicle] = useState<Vehicle | null>(null);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);

  const [testDriveVehicle, setTestDriveVehicle] = useState<Vehicle | null>(null);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle initial prompt passed from search or overview
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim().length > 0) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate intelligent concierge response with slight delay
    setTimeout(() => {
      const responseData = generateSimulatedResponse(text, filters);
      const assistantMsg: ChatMessage = {
        ...responseData,
        id: `assistant-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        timestamp: 'Just now',
        isSimulated: true,
        content: `Conversation reset. I am ready to advise you on specifications, vehicle comparisons, or bespoke lease structures.`,
        suggestedFollowUps: [
          "Quiet Long-Range Electric GT",
          "Compare Spectre GT vs Lumina SUV",
          "Calculate bespoke lease terms"
        ]
      }
    ]);
  };

  // Open modals handlers
  const handleOpenComparison = (vehicles: Vehicle[]) => {
    if (vehicles.length >= 2) {
      setComparisonVehicles(vehicles);
    } else {
      setComparisonVehicles([LUXURY_VEHICLES[0], LUXURY_VEHICLES[1]]);
    }
    setIsComparisonOpen(true);
  };

  const handleOpenFinance = (vehicle: Vehicle) => {
    setFinanceVehicle(vehicle);
    setIsFinanceOpen(true);
  };

  const handleOpenTestDrive = (vehicle: Vehicle) => {
    setTestDriveVehicle(vehicle);
    setIsTestDriveOpen(true);
  };

  const matchingVehiclesCount = LUXURY_VEHICLES.filter(v => {
    if (filters.propulsion !== 'All' && v.propulsion !== filters.propulsion) return false;
    if (filters.category !== 'All' && v.category !== filters.category) return false;
    if (v.startingPrice > filters.budgetMax) return false;
    return true;
  }).length;

  return (
    <div className="space-y-6">
      {/* Top Banner: Discovery & Personalization Toggle */}
      <div className="bg-white/95 rounded-3xl p-6 border border-lavender/80 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold text-plum">
                AI Buyer Co-Pilot
              </span>
              <Badge variant="lavender" size="sm" icon={<Sparkles className="w-3 h-3 text-lavender-deep" />}>
                Simulated Local AI
              </Badge>
              <Badge variant="sage" size="sm">
                Obsidian Advisor
              </Badge>
            </div>
            <p className="text-xs text-plum-light max-w-2xl leading-relaxed">
              Explore bespoke recommendations, compare engineering telemetry, calculate tailored financing, or schedule private white-glove home test drives.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant={showFilters ? 'primary' : 'lavender'}
              size="sm"
              icon={<SlidersHorizontal className="w-3.5 h-3.5" />}
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Preferences' : 'Personalization Controls'}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={<RotateCcw className="w-3.5 h-3.5 text-plum-light" />}
              onClick={handleResetChat}
            >
              Reset
            </Button>
          </div>
        </div>

        {/* Collapsible Personalization Drawer */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-lavender/50 animate-fadeIn">
            <PersonalizationDrawer
              filters={filters}
              onChangeFilters={setFilters}
              onReset={() => setFilters(INITIAL_FILTERS)}
              matchCount={matchingVehiclesCount}
            />
          </div>
        )}
      </div>

      {/* Suggested Prompt Chips */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-plum-muted px-1">
          <span className="font-semibold uppercase tracking-wider text-[11px]">
            Curated Inquiries
          </span>
          <span className="text-[11px]">Tap to ask immediately</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {PROMPT_SUGGESTIONS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(item.prompt)}
              className="p-3.5 rounded-2xl bg-white hover:bg-lavender/40 border border-lavender/70 shadow-xs hover:shadow-soft transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-plum group-hover:text-lavender-deep transition-colors">
                  {item.title}
                </span>
                <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-ivory-200 text-plum-muted">
                  {item.tag}
                </span>
              </div>
              <p className="text-[11px] text-plum-light line-clamp-2 leading-snug">
                "{item.prompt}"
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Chat Feed */}
      <div className="bg-ivory-200/50 rounded-3xl border border-lavender/80 p-4 sm:p-6 min-h-[460px] flex flex-col justify-between shadow-soft">
        <div className="space-y-4 overflow-y-auto max-h-[600px] pr-1">
          {messages.map((msg) => (
            <ChatMessageBubble
              key={msg.id}
              message={msg}
              onSelectPrompt={handleSendMessage}
              onCompare={handleOpenComparison}
              onCalculateFinance={handleOpenFinance}
              onBookTestDrive={handleOpenTestDrive}
            />
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-3 my-4">
              <div className="w-8 h-8 rounded-xl bg-ivory-200 border border-lavender flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-lavender-deep animate-pulse" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-lavender/80 shadow-xs flex items-center gap-1.5 text-xs text-plum-light">
                <span className="w-2 h-2 rounded-full bg-lavender-deep animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-lavender-deep animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-lavender-deep animate-bounce [animation-delay:0.4s]" />
                <span className="ml-2 font-medium">RYDR Co-Pilot is curating telematics...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="mt-4 pt-4 border-t border-lavender/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about vehicle dynamics, financing breakdown, or home test drives..."
                className="w-full bg-white text-xs sm:text-sm text-plum placeholder-plum-muted/70 px-4 sm:px-5 py-3.5 rounded-full border border-lavender/90 focus:border-lavender-deep focus:outline-none focus:ring-2 focus:ring-lavender-accent/30 shadow-xs transition-all"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={<Send className="w-4 h-4 text-peach" />}
              disabled={!inputText.trim() || isTyping}
            >
              Send
            </Button>
          </form>
          <div className="flex items-center justify-between text-[11px] text-plum-muted px-3 mt-2">
            <span>Simulated Automotive Intelligence • No external API needed</span>
            <span className="hidden sm:inline">Press Enter to dispatch inquiry</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      <VehicleComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        vehicles={comparisonVehicles}
        onBookTestDrive={handleOpenTestDrive}
        onCalculateFinance={handleOpenFinance}
      />

      <FinancingModal
        isOpen={isFinanceOpen}
        onClose={() => setIsFinanceOpen(false)}
        vehicle={financeVehicle}
      />

      <TestDriveModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
        vehicle={testDriveVehicle}
      />
    </div>
  );
};
