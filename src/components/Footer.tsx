import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Check, 
  Copy, 
  ExternalLink,
  ShieldCheck,
  Package,
  Layers,
  FileSpreadsheet,
  Calendar,
  History,
  Tag,
  ArrowUpRight
} from 'lucide-react';
import { MabriLogo } from './MabriLogo';

interface FooterProps {
  isDarkGlass: boolean;
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkGlass, onNavigateTab }) => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedHandle(label);
    setTimeout(() => {
      setCopiedHandle(null);
    }, 2500);
  };

  const socialHandles = [
    {
      platform: 'Instagram',
      handle: '@mabri_kenya',
      href: 'https://instagram.com/mabri_kenya',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'hover:text-pink-400 hover:border-pink-500/40',
      badge: 'Photos & Catalogues'
    },
    {
      platform: 'Facebook',
      handle: 'Mabri Limited',
      href: 'https://facebook.com/mabrilimited',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:text-blue-400 hover:border-blue-500/40',
      badge: '@mabrilimited'
    },
    {
      platform: 'X (Twitter)',
      handle: '@MabriLimited',
      href: 'https://x.com/MabriLimited',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'hover:text-cyan-400 hover:border-cyan-500/40',
      badge: 'Official Updates'
    },
    {
      platform: 'TikTok',
      handle: '@mabri.interiors',
      href: 'https://tiktok.com/@mabri.interiors',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.28 6.28 0 0 0 1.87-4.49V8.69a8.18 8.18 0 0 0 4.9 1.62V6.86a4.84 4.84 0 0 1-1-.17z"/>
        </svg>
      ),
      color: 'hover:text-rose-400 hover:border-rose-500/40',
      badge: 'Workshop Clips'
    },
    {
      platform: 'LinkedIn',
      handle: 'Mabri Limited',
      href: 'https://linkedin.com/company/mabrilimited',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: 'hover:text-sky-400 hover:border-sky-500/40',
      badge: 'Company Profile'
    },
    {
      platform: 'WhatsApp Support',
      handle: '+254 700 889 900',
      href: 'https://wa.me/254700889900',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.101-.477-.15-.678.15-.2.3-.778.98-1.004 1.205-.226.226-.452.251-.753.101-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.789-1.68-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.237-.245-.588-.493-.508-.678-.517-.176-.009-.377-.009-.578-.009s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.898.12.578-.087 1.782-.728 2.033-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.577-.351zm-5.467 7.218c-2.124 0-4.106-.57-5.823-1.564l-.417-.241-4.324 1.134 1.154-4.215-.264-.42c-1.09-1.734-1.666-3.753-1.666-5.824 0-6.046 4.919-10.965 10.965-10.965 2.93 0 5.684 1.141 7.755 3.212 2.072 2.071 3.213 4.825 3.213 7.755 0 6.047-4.919 10.966-10.965 10.966zm9.351-17.106c-2.497-2.498-5.818-3.874-9.351-3.874-7.279 0-13.2 5.922-13.2 13.201 0 2.327.608 4.601 1.764 6.604l-1.874 6.845 7.006-1.838c1.933 1.054 4.116 1.61 6.304 1.61 7.279 0 13.2-5.921 13.2-13.201 0-3.533-1.376-6.853-3.849-9.347z"/>
        </svg>
      ),
      color: 'hover:text-emerald-400 hover:border-emerald-500/40',
      badge: 'Order Desk & Inquiries'
    },
    {
      platform: 'YouTube',
      handle: '@MabriArchitectural',
      href: 'https://youtube.com/@MabriArchitectural',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'hover:text-red-400 hover:border-red-500/40',
      badge: 'Lipping Application Guides'
    }
  ];

  const quickNav = [
    { id: 'dashboard', label: 'Dashboard & Store KPIs', icon: Layers },
    { id: 'coded-lippings', label: 'Coded Lippings (#1 to #42 Zhonzhi)', icon: Tag },
    { id: 'inventory', label: 'Inventory & Stock Balances', icon: Package },
    { id: 'daily-sales', label: 'Daily Sales Ledger', icon: Calendar },
    { id: 'weekly-sales', label: 'Weekly Daily Sales Sheet', icon: FileSpreadsheet },
    { id: 'stock-history', label: 'Stock Movement Audit History', icon: History },
    { id: 'reports', label: 'PDF & Excel Reports Center', icon: ArrowUpRight }
  ];

  return (
    <footer className={`mt-auto border-t transition-colors duration-300 relative z-20 ${
      isDarkGlass
        ? 'glass-panel border-white/10 text-slate-300 bg-slate-950/85 backdrop-blur-2xl'
        : 'bg-white border-slate-200 text-slate-600 shadow-sm'
    }`}>
      {/* Upper Main Footer Grid - Flexible Fluid Desktop Layout */}
      <div className="w-full max-w-[1920px] 2xl:max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Facility Overview (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200/80 inline-flex items-center justify-center">
                <img src="/mabri-logo.svg" alt="Mabri Limited" className="h-8 w-auto object-contain" />
              </div>
              <div>
                <span className={`text-lg font-bold tracking-tight block ${isDarkGlass ? 'text-white' : 'text-slate-900'}`}>
                  MABRI LIMITED
                </span>
                <span className="text-xs text-amber-500 font-semibold uppercase tracking-wider block">
                  Zhonzhi-Nicewood Store • Kenya
                </span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed ${isDarkGlass ? 'text-slate-400' : 'text-slate-600'}`}>
              Premier supplier of high-precision PVC, ABS, and natural wood edge banding lippings, architectural profiles, 
              and board edging materials in Nairobi and across East Africa. Specializing in Zhonzhi-Nicewood coded finishes 
              with daily sales tracking and automated stock balance deductions.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Enterprise Road, Industrial Area, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Customer Care & Orders: +254 700 889 900 / +254 20 200 4500</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Store & Warehouse Enquiries: sales@mabri.co.ke</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Store Hours: Mon – Fri 8:00 AM – 5:30 PM • Sat 8:00 AM – 3:30 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Social Media Handles (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider ${isDarkGlass ? 'text-white' : 'text-slate-900'}`}>
                  Mabri Social Media Handles
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Follow, message, or tag Mabri Limited across all verified channels
                </p>
              </div>
              {copiedHandle && (
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 animate-in fade-in">
                  Copied {copiedHandle}!
                </span>
              )}
            </div>

            {/* Social Grid with copy & direct link */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {socialHandles.map((item) => (
                <div
                  key={item.platform}
                  className={`group p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isDarkGlass
                      ? 'bg-slate-900/60 border-white/8 hover:bg-slate-900/90 hover:border-white/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300'
                  }`}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2.5 flex-1 min-w-0 ${item.color} transition-colors`}
                    title={`Open ${item.platform}: ${item.handle}`}
                  >
                    <div className={`p-1.5 rounded-lg shrink-0 transition-transform group-hover:scale-110 ${
                      isDarkGlass ? 'bg-white/5 text-slate-200' : 'bg-white text-slate-700 shadow-2xs border border-slate-200'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center space-x-1.5">
                        <span className={`text-xs font-semibold truncate ${isDarkGlass ? 'text-slate-200' : 'text-slate-800'}`}>
                          {item.platform}
                        </span>
                        <ExternalLink className="w-2.5 h-2.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 block truncate">
                        {item.handle}
                      </span>
                    </div>
                  </a>

                  {/* Copy handle button */}
                  <button
                    onClick={() => copyToClipboard(item.handle, item.platform)}
                    title={`Copy handle ${item.handle}`}
                    className={`p-1.5 rounded-md text-slate-400 hover:text-amber-400 transition cursor-pointer shrink-0 ml-1 ${
                      isDarkGlass ? 'hover:bg-white/10' : 'hover:bg-slate-200'
                    }`}
                  >
                    {copiedHandle === item.platform ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
              isDarkGlass 
                ? 'bg-amber-500/5 border-amber-500/20 text-slate-300' 
                : 'bg-amber-50/60 border-amber-200 text-slate-700'
            }`}>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Direct WhatsApp Inquiries: <strong>+254 700 889 900</strong></span>
              </div>
              <a
                href="https://wa.me/254700889900"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-500 hover:underline flex items-center space-x-1"
              >
                <span>Chat Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation & Ledger Info (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${isDarkGlass ? 'text-white' : 'text-slate-900'}`}>
              System Navigation
            </h3>
            
            <ul className="space-y-1.5 text-xs">
              {quickNav.map((nav) => {
                const Icon = nav.icon;
                return (
                  <li key={nav.id}>
                    <button
                      onClick={() => onNavigateTab(nav.id)}
                      className={`flex items-center space-x-2 py-1 px-1.5 rounded-md w-full text-left transition cursor-pointer ${
                        isDarkGlass 
                          ? 'hover:text-amber-400 hover:bg-white/5 text-slate-400' 
                          : 'hover:text-amber-700 hover:bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{nav.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className={`p-3 rounded-xl border text-[11px] ${
              isDarkGlass ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center space-x-1.5 font-bold mb-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Stock Balance Formula</span>
              </div>
              <p className="font-mono text-[10px] text-amber-400/90 leading-tight">
                Current Stock = Opening + Received - Total Sales ± Adjustments
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Rights Reserved (Stretched Across Fullscreen) */}
      <div className={`border-t py-4 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 transition-colors duration-300 ${
        isDarkGlass ? 'border-white/10 bg-black/40' : 'border-slate-200 bg-slate-50'
      }`}>
        <div className="w-full max-w-[1920px] 2xl:max-w-none mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className={`font-semibold ${isDarkGlass ? 'text-slate-200' : 'text-slate-800'}`}>
              Mabri 2026. All rights reserved.
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">
              © 2026 Mabri Limited (Zhonzhi-Nicewood Store). All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-slate-400">
            <span>Enterprise Inventory System v2.6</span>
            <span>•</span>
            <span>Nairobi, Kenya</span>
            <span>•</span>
            <span className="inline-flex items-center text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              Live Ledger Synced
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};
