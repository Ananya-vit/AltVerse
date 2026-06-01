"use client";

import React, { useState, ChangeEvent, KeyboardEvent, FormEvent } from "react";

interface DreamySearchBarProps {
  onSearchSubmit?: (query: string) => void;
  placeholderText?: string;
}

export default function DreamySearchBar({ 
  onSearchSubmit, 
  placeholderText = "What if India Colonized Britain?" 
}: DreamySearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const executeSearch = (): void => {
    if (!query.trim()) return;
    if (onSearchSubmit) onSearchSubmit(query.trim());
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") executeSearch();
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    executeSearch();
  };

  return (
    <form 
      onSubmit={handleFormSubmit} 
      className="relative w-full max-w-[1050px] mx-auto px-4 z-20 flex justify-center items-center group"
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/15 to-cyan-500/10 blur-xl opacity-75 group-focus-within:opacity-100 group-focus-within:blur-2xl transition-all duration-500 pointer-events-none" />
      
      <div className="relative flex items-center w-full rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-lg shadow-lg shadow-black/40 transition-all duration-300 group-focus-within:border-indigo-400/40 group-focus-within:bg-white/15 group-focus-within:shadow-xl">
        <span className="flex items-center justify-center pl-6 text-gray-300 group-focus-within:text-cyan-300/80 transition-colors duration-300 pointer-events-none">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholderText}
          spellCheck={false}
          className="w-full bg-transparent text-white pl-5 pr-20 py-6 text-lg md:text-xl font-light tracking-wide placeholder-white/60 focus:outline-none transition-all group-focus-within:placeholder-white/20"
        />
        
        <button 
          type="button" 
          onClick={executeSearch} 
          className="absolute right-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-950 hover:border-white shadow-md active:scale-95"
        >
          <span className="text-2xl font-light leading-none">✦</span>
        </button>
      </div>
    </form>
  );
}