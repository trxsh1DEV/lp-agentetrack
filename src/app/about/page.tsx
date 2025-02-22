"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-[92vh] flex items-center justify-center p-8 w-full bg-gray-900 text-white">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-400">
          Sobre o Agente Track
        </h1>
        <p className="text-xl text-gray-300">
          O <span className="font-bold text-white">Agente Track</span> é a
          solução definitiva para inventário e gerenciamento de ativos de TI.
          Nossa plataforma permite uma coleta detalhada de informações dos
          dispositivos, proporcionando total controle sobre seu ambiente de TI.
        </p>

        <h2 className="text-3xl font-bold text-emerald-400">
          Principais Funcionalidades
        </h2>
        <ul className="text-left space-y-3 text-gray-300 text-lg">
          <li>✅ Coleta detalhada de softwares, hardwares e processos</li>
          <li>✅ Estoque e rastreamento de equipamentos</li>
          <li>✅ Relatórios inteligentes e alertas automáticos</li>
          <li>✅ Gestão de licenciamento e controle de compliance</li>
          <li>✅ Mensageria e campanhas informativas</li>
          <li>✅ Gerenciamento remoto e ações automatizadas</li>
          <li>✅ Controle de depreciação de equipamentos</li>
          <li>✅ Geolocalização e monitoramento de ativos</li>
          <li>✅ API para integração com outros sistemas</li>
          <li>✅ Controle de perda e furto de dispositivos</li>
        </ul>

        <p className="text-2xl text-gray-300">
          O Agente Track transforma a forma como sua empresa gerencia seus
          ativos de TI, trazendo mais segurança, eficiência e controle.
          Experimente agora!
        </p>
      </div>
    </div>
  );
}
