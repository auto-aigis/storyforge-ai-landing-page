"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  BookOpen,
  Zap,
  PenTool,
  ArrowRight,
  Check,
  Star,
  Layers,
  Timer,
  Users,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
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

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features: Feature[] = [
    {
      icon: <PenTool className="h-6 w-6 text-violet-500" />,
      title: "One Line Input",
      description:
        "Type a single sentence — a premise, an opening line, or even just a mood — and let AI do the rest.",
    },
    {
      icon: <Layers className="h-6 w-6 text-violet-500" />,
      title: "Genre-Aware Generation",
      description:
        "Choose from fantasy, sci-fi, romance, thriller, horror, and more. Each story follows genre conventions naturally.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-violet-500" />,
      title: "Complete Story Structure",
      description:
        "Every generated story includes characters, rising action, a climax, and a satisfying conclusion.",
    },
    {
      icon: <Timer className="h-6 w-6 text-violet-500" />,
      title: "Instant Results",
      description:
        "Full stories generated in seconds, not minutes. No waiting, no prompt tweaking, no revisions needed.",
    },
    {
      icon: <Zap className="h-6 w-6 text-violet-500" />,
      title: "Length Controls",
      description:
        "Want a flash fiction piece or a full short story? Set your desired length and get perfectly paced output.",
    },
    {
      icon: <Users className="h-6 w-6 text-violet-500" />,
      title: "Built for Everyone",
      description:
        "No writing experience needed. Perfect for students, content creators, hobbyists, and casual storytellers.",
    },
  ];

  const steps: Step[] = [
    {
      number: "01",
      title: "Type Your Opening Line",
      description:
        "Enter any sentence, premise, or idea. It can be as simple as a character name and a situation.",
    },
    {
      number: "02",
      title: "Choose Your Settings",
      description:
        "Pick a genre, set the length, and optionally adjust the tone. Or just leave defaults — they work great.",
    },
    {
      number: "03",
      title: "Get Your Complete Story",
      description:
        "In seconds, receive a fully structured narrative with characters, plot arcs, and a satisfying ending.",
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out StoryForge AI",
      features: [
        "3 stories per day",
        "Up to 500 words per story",
        "5 genre options",
        "Basic story structure",
        "Share and export as text",
      ],
      popular: false,
      cta: "Get Started Free",
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "For regular storytellers who want more",
      features: [
        "Unlimited stories",
        "Up to 3,000 words per story",
        "All genres unlocked",
        "Advanced plot structures",
        "Character profiles included",
        "Export as PDF or DOCX",
        "Story history saved",
      ],
      popular: true,
      cta: "Start Pro Trial",
    },
    {
      name: "Team",
      price: "$29",
      period: "per month",
      description: "For classrooms, teams, and creators",
      features: [
        "Everything in Pro",
        "Up to 10 team members",
        "Collaborative story editing",
        "Custom genre templates",
        "API access",
        "Priority support",
        "Admin dashboard",
      ],
      popular: false,
      cta: "Contact Sales",
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
              <span className="text-xl font-bold text-gray-900">StoryForge AI</span>
            </div>

            {/* Desktop Navigation */}
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
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
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
                <Button variant="ghost" className="w-full text-sm">
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button className="w-full text-sm bg-violet-600 hover:bg-violet-700 text-white">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
            <Star className="h-3.5 w-3.5 mr-1.5" />
            AI-Powered Story Generation
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Type one line.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Get a complete story
            </span>{" "}
            — instantly.
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            StoryForge AI transforms a single sentence into a fully structured, genre-aware story with characters,
            plot arcs, and a satisfying conclusion. No writing experience needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="/register">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg">
                Start Creating Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                See How It Works
              </Button>
            </a>
          </div>

          {/* Demo Preview */}
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 mb-2">Your opening line:</p>
              <p className="text-lg font-medium text-gray-800 mb-4 italic">
                {'"The last lighthouse keeper on Earth received a signal from the ocean floor."'}
              </p>
              <Separator className="my-4" />
              <p className="text-sm text-gray-500 mb-2">Generated story preview:</p>
              <p className="text-gray-700 leading-relaxed">
                {"Marcus hadn't expected the frequency to change. For seventeen years, the automated lighthouse had done its work without him — rotating its beam across empty waters while he maintained the machinery out of habit rather than necessity. But tonight, the old radio crackled to life with a pattern he recognized from his grandfather's naval codebooks..."}
              </p>
              <p className="text-violet-600 text-sm font-medium mt-3">+ 2,847 more words generated →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create stories effortlessly
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No prompt engineering. No writing skills required. Just one line of inspiration and
              {"you're"} ready to go.
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              From idea to complete story in 3 steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The simplest creative writing tool {"you'll"} ever use. No learning curve, no complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="text-5xl font-bold text-violet-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-violet-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start free and upgrade when {"you're"} ready for more. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "border-violet-500 border-2 shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-violet-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-violet-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="/register" className="w-full">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-violet-600 hover:bg-violet-700 text-white"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600">
              {"Everything you need to know about StoryForge AI."}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does StoryForge AI differ from ChatGPT?</AccordionTrigger>
              <AccordionContent>
                Unlike general-purpose AI tools, StoryForge AI is purpose-built for story generation. You {"don't"}
                need to know how to write prompts — just type one line and select a genre. Our AI is specifically
                trained to produce well-structured narratives with proper plot arcs, character development, and
                satisfying conclusions, without any prompt engineering.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need writing experience to use this?</AccordionTrigger>
              <AccordionContent>
                Absolutely not! StoryForge AI is designed for everyone — students, hobbyists, content creators,
                and anyone who has an idea but {"doesn't"} know how to develop it into a full story. If you can type
                a sentence, you can create a story.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I edit the generated stories?</AccordionTrigger>
              <AccordionContent>
                Yes! Every generated story is fully editable. You can tweak characters, adjust the plot, change
                the ending, or use the story as a starting point for your own creative writing. Pro users also
                get the ability to regenerate specific sections.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What genres are available?</AccordionTrigger>
              <AccordionContent>
                Free users have access to 5 core genres (Fantasy, Sci-Fi, Romance, Mystery, and Horror). Pro
                and Team users unlock all genres including Thriller, Literary Fiction, Comedy, Historical Fiction,
                Adventure, and more. We regularly add new genre options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Who owns the generated stories?</AccordionTrigger>
              <AccordionContent>
                You do! All stories generated through StoryForge AI belong entirely to you. You can publish them,
                share them, or use them commercially — {"there's"} no attribution required and no licensing
                restrictions on your generated content.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to turn your ideas into stories?
          </h2>
          <p className="text-lg text-violet-100 mb-10 max-w-2xl mx-auto">
            Join thousands of creators who are already using StoryForge AI to bring their stories to life.
            Start free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register">
              <Button size="lg" className="bg-white text-violet-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <p className="text-violet-200 text-sm mt-6">
            No credit card required • 3 free stories daily • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-600" />
              <span className="text-lg font-bold text-gray-900">StoryForge AI</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
              <a href="/login" className="hover:text-gray-900 transition-colors">Sign In</a>
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