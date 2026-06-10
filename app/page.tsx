"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Sparkles,
  Zap,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Feather,
  Globe,
  Shield,
  Clock,
  Menu,
  X,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "One Prompt, Full Story",
    description:
      "Type a single sentence or idea and receive a complete, structured narrative — no outlines, no scene management, no expertise required.",
  },
  {
    icon: BookOpen,
    title: "Narrative Arc Built In",
    description:
      "Every story includes a beginning, rising action, climax, and resolution — automatically crafted with professional storytelling principles.",
  },
  {
    icon: Users,
    title: "Rich Character Development",
    description:
      "Characters feel alive with motivations, arcs, and dialogue — generated intelligently from your premise without any extra input.",
  },
  {
    icon: Globe,
    title: "Any Genre, Any Tone",
    description:
      "Fantasy, sci-fi, romance, thriller, horror, literary fiction — StoryForge AI adapts pacing, tone, and style to your chosen genre automatically.",
  },
  {
    icon: Feather,
    title: "Your Voice, Preserved",
    description:
      "Unlike other tools, StoryForge AI amplifies your idea rather than replacing it — you stay the author, we handle the craft.",
  },
  {
    icon: Shield,
    title: "Zero Learning Curve",
    description:
      "No chapters to manage, no beats to configure, no prompt engineering to master. Just write your idea and hit generate.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter Your Idea",
    description:
      "Type anything — a single sentence, a character concept, a wild scenario. The simpler, the better.",
    example: '"A lighthouse keeper discovers the light is actually a beacon for something ancient."',
  },
  {
    number: "02",
    title: "Choose Your Genre",
    description:
      "Select from fantasy, sci-fi, romance, thriller, horror, and more — or let the AI decide based on your premise.",
    example: "Horror, Literary Fiction, Sci-Fi Thriller...",
  },
  {
    number: "03",
    title: "Receive Your Story",
    description:
      "In seconds, get a fully-formed story with narrative arc, developed characters, and satisfying resolution.",
    example: "2,000–5,000 word complete story, instantly.",
  },
];

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying StoryForge AI and casual story generation.",
    features: [
      "3 stories per month",
      "Up to 2,000 words per story",
      "5 genre options",
      "Basic export (TXT)",
      "Community support",
    ],
    cta: "Get Started Free",
    highlighted: false,
    badge: null,
  },
  {
    name: "Creator",
    price: "$12",
    period: "per month",
    description: "For hobbyists, educators, and content creators who need more.",
    features: [
      "30 stories per month",
      "Up to 5,000 words per story",
      "All genres & tones",
      "Export to PDF, DOCX, TXT",
      "Story history & saving",
      "Priority generation",
      "Email support",
    ],
    cta: "Start Creating",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Unlimited creativity for power users and prolific storytellers.",
    features: [
      "Unlimited stories",
      "Up to 10,000 words per story",
      "Custom style & voice settings",
      "All export formats",
      "Story series & sequels",
      "Advanced character profiles",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Go Pro",
    highlighted: false,
    badge: null,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Elementary School Teacher",
    content:
      "I use StoryForge AI to create custom stories for my students. In minutes I have engaging, age-appropriate narratives I could never write myself. It has completely transformed my classroom.",
    rating: 5,
  },
  {
    name: "Jake R.",
    role: "Hobbyist Writer",
    content:
      "I tried Sudowrite and NovelAI — they felt like tools built for people who already know what they{\"'\"}re doing. StoryForge just works. I type my idea and get a real story back. That{\"'\"}s all I wanted.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Content Creator",
    content:
      "The stories I generate become scripts for my YouTube channel. The narrative structure is solid every time — beginning, middle, end. My audience keeps asking how I come up with such good concepts.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How long are the stories StoryForge AI generates?",
    answer:
      "Stories range from 2,000 to 10,000 words depending on your plan. Free users get up to 2,000 words, Creator plan up to 5,000 words, and Pro users can generate stories up to 10,000 words — the equivalent of a short story or novella chapter.",
  },
  {
    question: "Do I own the stories that are generated?",
    answer:
      "Yes, completely. Any story generated using your prompt is yours to use, publish, sell, or share however you like. We retain no rights to your generated content.",
  },
  {
    question: "How is StoryForge AI different from ChatGPT or other AI tools?",
    answer:
      "General AI tools give you fragments — they require prompt engineering, iterative refinement, and writing expertise to shape into a real story. StoryForge AI is purpose-built to output complete narratives with proper structure, character arcs, and satisfying endings from a single sentence.",
  },
  {
    question: "Can I edit the stories after they are generated?",
    answer:
      "Absolutely. Every story is fully editable in our built-in editor, and you can export to PDF, DOCX, or TXT to continue editing in your preferred tool.",
  },
  {
    question: "What genres are supported?",
    answer:
      "We support Fantasy, Sci-Fi, Romance, Thriller, Horror, Mystery, Literary Fiction, Adventure, Historical Fiction, and more. The Creator and Pro plans unlock all available genres and tonal settings.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "The Free plan lets you generate 3 stories per month indefinitely — no credit card required. If you want to upgrade, Creator and Pro plans come with a 7-day money-back guarantee.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const annualDiscount = 0.8;

  const displayPrice = (plan: PricingPlan): string => {
    if (plan.price === "$0") return "$0";
    const numeric = parseInt(plan.price.replace("$", ""), 10);
    if (billingCycle === "annual") {
      return `$${Math.round(numeric * annualDiscount)}`;
    }
    return plan.price;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StoryForge AI</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
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
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="/login">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                >
                  Get Started
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col gap-4 pb-4">
                <a href="#features" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                  Features
                </a>
                <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                  How It Works
                </a>
                <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </a>
                <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </a>
              </nav>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                <a href="/login">
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-indigo-50 to-white pt-20 pb-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-100">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Story Generation
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Turn any idea into a{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              full story
            </span>
            {" "}— instantly.
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Type one sentence. Get a complete, structured story with characters, narrative arc, and a satisfying ending — in seconds. No writing experience needed.
          </p>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Start Writing Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all"
              >
                See How It Works
              </Button>
            </a>
          </div>

          {/* Demo preview card */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-sm text-gray-500 font-mono">StoryForge AI</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <Feather className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base italic">
                    {"\"A lighthouse keeper discovers the light is actually a beacon for something ancient.\""}
                  </span>
                  <Badge className="ml-auto bg-green-100 text-green-700 flex-shrink-0">Horror</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-sm text-gray-500">Generating your story...</span>
                  </div>
                  <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <p className="font-semibold text-gray-900 text-base">The Last Keeper of Harrow Point</p>
                    <p>
                      Elias had tended the Harrow Point lighthouse for thirty-one years without incident. The light turned, the fog horn groaned on schedule, and the sea offered up its usual indifference. He had learned not to expect surprises from the ocean...
                    </p>
                    <p className="text-gray-400 italic text-xs">... 3,847 words generated • Complete narrative arc • 3 developed characters</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["bg-purple-400", "bg-indigo-400", "bg-pink-400", "bg-blue-400"].map((color, i) => (
                  <div key={i} className={`w-8 h-8 ${color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {["S", "J", "P", "M"][i]}
                  </div>
                ))}
              </div>
              <span>10,000+ stories generated</span>
            </div>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1">4.9/5 from early users</span>
            </div>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Stories ready in under 30 seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
              Why StoryForge AI
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Stories that write themselves
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for people who have great ideas but don{"'"}t want to spend months learning how to structure them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-indigo-200 transition-all">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-100">
              Simple Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Three steps to your story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No learning curve, no setup, no prompt engineering. Just your idea and a complete story.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-indigo-200 z-10 translate-x-4" />
                )}
                <Card className="relative border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-100">
                      <p className="text-sm text-purple-700 italic">{step.example}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Try It Free Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 hover:bg-green-100">
              Real Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What creators are saying
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From educators to hobbyists — StoryForge AI works for everyone who has an idea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-100">
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free. Upgrade only when you need more stories.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <Tabs defaultValue="monthly" onValueChange={(v) => setBillingCycle(v)}>
              <TabsList className="bg-gray-100 p-1">
                <TabsTrigger value="monthly" className="px-6">Monthly</TabsTrigger>
                <TabsTrigger value="annual" className="px-6">
                  Annual
                  <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 20%</Badge>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="monthly" />
              <TabsContent value="annual" />
            </Tabs>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-purple-500 shadow-2xl shadow-purple-100 scale-105"
                    : "border-gray-100 hover:border-purple-200 hover:shadow-lg"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 text-sm">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-5xl font-extrabold text-gray-900">{displayPrice(plan)}</span>
                    {plan.price !== "$0" && (
                      <span className="text-gray-500 text-sm">/{billingCycle === "annual" ? "mo, billed annually" : "month"}</span>
                    )}
                  </div>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="/register" className="w-full">
                    <Button
                      className={`w-full py-3 font-semibold rounded-xl ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            No credit card required for Free plan. 7-day money-back guarantee on all paid plans.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Common questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about StoryForge AI.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-100 rounded-xl px-6 hover:border-purple-200 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Your next great story is{" "}
            <span className="text-purple-200">one sentence away</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of creators, educators, and hobbyists who use StoryForge AI to turn their ideas into complete stories — instantly, effortlessly.
          </p>

          {/* Email capture */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="bg-white/10 border-white/30 text-white placeholder:text-purple-200 focus:bg-white/20 flex-1"
            />
            <a href={`/register${emailInput ? `?email=${encodeURIComponent(emailInput)}` : ""}`}>
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 font-bold px-8 whitespace-nowrap w-full sm:w-auto"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          <p className="text-purple-200 text-sm">
            Free forever plan available. No credit card required. Start generating stories in 60 seconds.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-purple-100 text-sm">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>No writing experience needed</span>
            </div>
            <div className="flex items-center gap-2 text-purple-100 text-sm">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Stories ready in under 30 seconds</span>
            </div>
            <div className="flex items-center gap-2 text-purple-100 text-sm">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>You own everything you create</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">StoryForge AI</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Turn any idea into a full story — instantly. Built for the non-writer.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Account</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/login" className="hover:text-white transition-colors">Sign In</a></li>
                <li><a href="/register" className="hover:text-white transition-colors">Create Account</a></li>
                <li><a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-800 mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              {"© 2024 StoryForge AI. All rights reserved."}
            </p>
            <p className="text-sm text-gray-500">
              Made with <span className="text-purple-400">{"♥"}</span> for storytellers everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}