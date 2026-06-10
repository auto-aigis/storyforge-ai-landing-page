"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Zap,
  BookOpen,
  PenTool,
  Clock,
  Shield,
  ChevronRight,
  Menu,
  X,
  Check,
  Globe,
  Smartphone,
  Brain,
} from "lucide-react";
import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features: Feature[] = [
    {
      icon: <Brain className="h-6 w-6 text-violet-500" />,
      title: "Voice Preservation",
      description:
        "Our AI analyzes your writing style and maintains your unique voice throughout the expanded narrative.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-violet-500" />,
      title: "Plot Coherence Engine",
      description:
        "Advanced memory architecture ensures characters, events, and timelines stay consistent from start to finish.",
    },
    {
      icon: <Zap className="h-6 w-6 text-violet-500" />,
      title: "60-Second Stories",
      description:
        "Paste your fragment, click generate, and receive a complete narrative in under a minute. No complex setup required.",
    },
    {
      icon: <PenTool className="h-6 w-6 text-violet-500" />,
      title: "Genre-Aware Output",
      description:
        "Whether it's sci-fi, romance, mystery, or literary fiction — StoryForge adapts its style to match your genre.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-violet-500" />,
      title: "Mobile-First Design",
      description:
        "Write and generate stories on any device. Optimized for mobile users across emerging markets.",
    },
    {
      icon: <Globe className="h-6 w-6 text-violet-500" />,
      title: "Affordable for Everyone",
      description:
        "Start free, pay only when you need more. No $20/month subscriptions for casual storytellers.",
    },
  ];

  const steps: Step[] = [
    {
      number: "01",
      title: "Paste Your Fragment",
      description:
        "Drop in anything — a sentence, a paragraph, a rough outline, or even just a character description.",
    },
    {
      number: "02",
      title: "Choose Your Preferences",
      description:
        "Select genre, tone, length, and style. Or let StoryForge auto-detect from your writing.",
    },
    {
      number: "03",
      title: "Get Your Complete Story",
      description:
        "In under 60 seconds, receive a full, coherent narrative that feels like you wrote every word.",
    },
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out StoryForge with no commitment.",
      features: [
        "3 stories per month",
        "Up to 1,000 words per story",
        "Basic genre detection",
        "Standard generation speed",
      ],
      highlighted: false,
    },
    {
      name: "Creator",
      price: "$5",
      period: "per month",
      description: "For hobbyist writers who want more power and flexibility.",
      features: [
        "30 stories per month",
        "Up to 5,000 words per story",
        "Advanced voice preservation",
        "All genres unlocked",
        "Priority generation speed",
        "Story history & editing",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "For serious storytellers and content creators.",
      features: [
        "Unlimited stories",
        "Up to 15,000 words per story",
        "Premium voice & plot engine",
        "Multi-chapter support",
        "Export to PDF & EPUB",
        "API access",
        "Priority support",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-violet-600" />
              <span className="font-bold text-xl text-gray-900">StoryForge AI</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="/login">
                <Button variant="ghost" className="text-sm">
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button className="text-sm bg-violet-600 hover:bg-violet-700 text-white">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 pb-4">
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 py-2">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 py-2">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 py-2">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 py-2">
                FAQ
              </a>
              <Separator />
              <a href="/login">
                <Button variant="ghost" className="w-full text-sm justify-center">
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button className="w-full text-sm bg-violet-600 hover:bg-violet-700 text-white justify-center">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-violet-700 bg-violet-50 border-violet-200">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered Story Completion
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Turn your story spark into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                complete narrative
              </span>{" "}
              — instantly.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Paste a fragment, a rough idea, or even a single sentence. StoryForge AI expands it into a full,
              coherent story that preserves your voice — in under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/register">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 text-base">
                  Start Writing Free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="px-8 text-base">
                  See How It Works
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">No credit card required. 3 free stories per month.</p>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 sm:p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-amber-800 mb-1">Your Fragment:</p>
                  <p className="text-sm text-amber-700 italic">
                    {"\"The last train left at midnight. She stood on the empty platform, clutching a letter she'd never send...\""}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2 text-violet-600">
                    <Zap className="h-4 w-4" />
                    <span className="text-xs font-medium">StoryForge expanding...</span>
                  </div>
                </div>
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-violet-800 mb-1">Complete Story:</p>
                  <p className="text-sm text-violet-700">
                    {"\"The last train left at midnight. She stood on the empty platform, clutching a letter she'd never send. The November wind carried whispers of what might have been — three years of silence compressed into two handwritten pages. Maya had rehearsed this moment a thousand times...\""}
                  </p>
                  <p className="text-xs text-violet-500 mt-2">+ 2,847 more words of coherent narrative...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for storytellers, not programmers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlike generic AI chatbots, StoryForge is purpose-built for narrative completion with features that
              actually matter for writers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:border-violet-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              From fragment to finished story in 3 steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No complex interfaces, no steep learning curves. Just paste, click, and read.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-violet-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                    <ChevronRight className="h-6 w-6 text-violet-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Average completion time: 47 seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pricing that respects casual creators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {"You shouldn't need a $20/month subscription to finish a story. Start free, upgrade only if you love it."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.highlighted
                    ? "border-violet-400 shadow-lg shadow-violet-100 scale-[1.02]"
                    : "border-gray-200"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-violet-600 text-white hover:bg-violet-600">{tier.badge}</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-500 ml-1">/{tier.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="/register" className="w-full">
                    <Button
                      className={`w-full ${
                        tier.highlighted
                          ? "bg-violet-600 hover:bg-violet-700 text-white"
                          : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                      }`}
                    >
                      {tier.price === "$0" ? "Start Free" : "Get Started"}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-violet-600">47s</div>
              <div className="text-sm text-gray-600 mt-1">Avg. Generation Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600">98%</div>
              <div className="text-sm text-gray-600 mt-1">Plot Coherence Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600">15+</div>
              <div className="text-sm text-gray-600 mt-1">Supported Genres</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600">10K+</div>
              <div className="text-sm text-gray-600 mt-1">Stories Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about StoryForge AI.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How is this different from ChatGPT or Claude?</AccordionTrigger>
              <AccordionContent>
                Unlike general-purpose AI chatbots, StoryForge is purpose-built for narrative completion. We use
                specialized models that understand story structure, maintain character consistency, preserve your
                writing voice, and ensure plot coherence across thousands of words. Generic chatbots lose context
                and break narratives — we don{"'"}t.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What can I paste as a starting fragment?</AccordionTrigger>
              <AccordionContent>
                Anything! A single sentence, a paragraph, a character description, a plot outline, dialogue
                snippets, or even just a genre and mood. The more you give us, the more tailored the output — but
                even a sentence works beautifully.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Will the AI match my writing style?</AccordionTrigger>
              <AccordionContent>
                Yes. Our Voice Preservation engine analyzes your fragment{"'"}s tone, vocabulary complexity, sentence
                structure, and narrative perspective. The generated continuation reads as if you wrote it yourself.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do I own the stories generated?</AccordionTrigger>
              <AccordionContent>
                Absolutely. You retain full ownership and rights to every story generated on StoryForge. Use them
                however you want — publish, share, modify, or keep them private.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I edit the generated story?</AccordionTrigger>
              <AccordionContent>
                Yes! On Creator and Pro plans, you get a built-in editor to refine, trim, or expand specific
                sections. You can also regenerate individual paragraphs while keeping the rest intact.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Is there a word limit on inputs?</AccordionTrigger>
              <AccordionContent>
                Free users can input up to 500 words. Creator plan supports up to 2,000 words of input, and Pro
                supports up to 5,000 words — perfect for expanding longer drafts into full narratives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-8 sm:p-12 md:p-16">
            <Shield className="h-10 w-10 text-violet-200 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your story deserves an ending
            </h2>
            <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">
              {"Don't"} let your ideas gather dust in a notes app. Paste your fragment and watch it become the
              story you always meant to write.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/register">
                <Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50 px-8 text-base font-semibold">
                  Get Started — {"It's"} Free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-violet-200">3 free stories per month. No credit card needed.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-600" />
              <span className="font-bold text-lg text-gray-900">StoryForge AI</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#features" className="hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <a href="/login" className="hover:text-gray-900 transition-colors">
                Sign In
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 StoryForge AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}