import type { ChatMessage, PersonalizationFilters } from '../types';
import { LUXURY_VEHICLES } from './mockData';

export function generateSimulatedResponse(
  userQuery: string,
  filters: PersonalizationFilters
): Omit<ChatMessage, 'id' | 'timestamp'> {
  const query = userQuery.toLowerCase();

  // 1. Comparison Intent
  if (query.includes('compare') || query.includes('versus') || query.includes('vs')) {
    const spectre = LUXURY_VEHICLES.find(v => v.id === 'spectre-gt')!;
    const lumina = LUXURY_VEHICLES.find(v => v.id === 'lumina-suv')!;
    return {
      sender: 'assistant',
      isSimulated: true,
      content: `I've prepared a side-by-side comparative analysis between the **RYDR Spectre GT** and the **RYDR Lumina Executive SUV**.\n\nWhile the Spectre GT delivers a sports-car center of gravity (0.21 Cd drag coefficient) and zero-emission acoustic tranquility for 340 miles, the Lumina Executive provides elevated sanctuary seating for up to 7, active hydraulic roll cancellation, and transcontinental 580-mile hybrid autonomy.\n\nTake a look at the tailored spec breakdown below:`,
      comparisonVehicles: [spectre, lumina],
      suggestedFollowUps: [
        "Calculate lease comparison for both",
        "Book private viewing of the Spectre GT",
        "Show interior trim options"
      ]
    };
  }

  // 2. Financing & Lease Calculator Intent
  if (query.includes('finance') || query.includes('lease') || query.includes('cost') || query.includes('monthly') || query.includes('price')) {
    const spectre = LUXURY_VEHICLES.find(v => v.id === 'spectre-gt')!;
    return {
      sender: 'assistant',
      isSimulated: true,
      content: `Here is a bespoke acquisition estimate for the **${spectre.name}** based on our current Obsidian Tier private portfolio terms.\n\nUnder our 36-month tailored lease schedule with an assumed \$15,000 capital reduction, the estimated monthly investment is approximately **\$1,680/mo** plus local taxes, including complimentary White-Glove Valet service and all scheduled atelier maintenance.`,
      financingDetails: {
        vehicleName: spectre.name,
        vehiclePrice: spectre.startingPrice,
        monthlyPayment: 1680,
        termMonths: 36,
        downPayment: 15000,
        apr: 3.4
      },
      suggestedVehicles: [spectre],
      suggestedFollowUps: [
        "Adjust down payment to $25,000",
        "Show cash purchase & tax incentives",
        "Reserve private test drive"
      ]
    };
  }

  // 3. Test Drive Booking Intent
  if (query.includes('test drive') || query.includes('drive') || query.includes('viewing') || query.includes('appointment') || query.includes('book')) {
    const targetVehicle = LUXURY_VEHICLES.find(v => 
      query.includes('lumina') ? v.id === 'lumina-suv' :
      query.includes('aether') ? v.id === 'aether-roadster' :
      query.includes('elysian') ? v.id === 'elysian-sedan' :
      v.id === 'spectre-gt'
    ) || LUXURY_VEHICLES[0];

    return {
      sender: 'assistant',
      isSimulated: true,
      content: `Delighted to arrange this. As a privileged client, your test drive with the **${targetVehicle.name}** includes complimentary door-to-door concierge delivery to your private residence or executive office, accompanied by a dedicated RYDR product specialist.\n\nPlease select your preferred time slot and drop-off address via the reservation card below.`,
      testDriveVehicle: targetVehicle,
      suggestedFollowUps: [
        "Request weekend overnight trial",
        "Send vehicle spec to my email",
        "Inquire about bespoke paint sample delivery"
      ]
    };
  }

  // 4. Track / Performance Intent
  if (query.includes('speed') || query.includes('track') || query.includes('fast') || query.includes('power') || query.includes('race') || query.includes('roadster')) {
    const aether = LUXURY_VEHICLES.find(v => v.id === 'aether-roadster')!;
    return {
      sender: 'assistant',
      isSimulated: true,
      content: `For unrelenting dynamics and track-bred precision, the **RYDR Aether Speedster** stands uncompromised. Engineered around a bespoke carbon-fiber monocoque with tri-motor torque vectoring pushing 890 HP, it accelerates from 0 to 60 mph in a blistering 2.3 seconds with track telemetry recording enabled.`,
      suggestedVehicles: [aether],
      suggestedFollowUps: [
        "Schedule private track session at Laguna Seca",
        "Explore carbon monocoque specifications",
        "Compare with Spectre GT"
      ]
    };
  }

  // 5. SUV / Family / Space Intent
  if (query.includes('suv') || query.includes('family') || query.includes('space') || query.includes('seating') || query.includes('luggage')) {
    const lumina = LUXURY_VEHICLES.find(v => v.id === 'lumina-suv')!;
    return {
      sender: 'assistant',
      isSimulated: true,
      content: `For seamless transcontinental journeys with family or companions, I highly recommend the **RYDR Lumina Executive**. It features an acoustically isolated cabin with reconfigurable 5 or 7 seating, dual wine chillers, and 580 miles of hybrid touring breadth that effortlessly handles mountain roads and city avenues alike.`,
      suggestedVehicles: [lumina],
      suggestedFollowUps: [
        "Show 7-seat configuration layout",
        "Schedule home demonstration",
        "Compare with Elysian Saloon"
      ]
    };
  }

  // 6. Filter-aware or General Guidance
  let matched = LUXURY_VEHICLES.filter(v => {
    if (filters.propulsion !== 'All' && v.propulsion !== filters.propulsion) return false;
    if (filters.category !== 'All' && v.category !== filters.category) return false;
    if (v.startingPrice > filters.budgetMax) return false;
    return true;
  });

  if (matched.length === 0) {
    matched = [LUXURY_VEHICLES[0], LUXURY_VEHICLES[1]];
  }

  return {
    sender: 'assistant',
    isSimulated: true,
    content: `Based on your query and active atelier preferences (**${filters.propulsion}** propulsion, **${filters.primaryPriority}**, within up to **\$${filters.budgetMax.toLocaleString()}**), I have curated these bespoke configurations that best align with your lifestyle:`,
    suggestedVehicles: matched.slice(0, 2),
    suggestedFollowUps: [
      "Compare these two side-by-side",
      "Configure interior upholstery in Atelier",
      "Calculate 36-month lease estimates"
    ]
  };
}
