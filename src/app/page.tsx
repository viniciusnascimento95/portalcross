"use client"

import { Dumbbell } from "lucide-react";
import { useState } from "react";
import { MovementCard } from "./components/MovementCard";
import { WorkoutBuilder } from "./components/WorkoutBuilder";
import { Movement } from "./types";

export default function Home() {

  const [selectedMovements, setSelectedMovements] = useState<Movement[]>([]);

  const handleAddMovement = (movement: Movement) => {
    setSelectedMovements([...selectedMovements, movement]);
  };

  const handleRemoveMovement = (index: number) => {
    setSelectedMovements(selectedMovements.filter((_, i) => i !== index));
  };

  //v1 moviments
  // const movements: Movement[] = [
  //   {
  //     id: 1,
  //     name: 'Air Squat',
  //     description: 'Agachamento livre, movimento fundamental do CrossFit',
  //     image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=80',
  //     difficulty: 'Iniciante',
  //     defaultReps: 15,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 2,
  //     name: 'Push-up',
  //     description: 'Flexão de braço tradicional',
  //     image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80',
  //     difficulty: 'Iniciante',
  //     defaultReps: 10,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 3,
  //     name: 'Pull-up',
  //     description: 'Elevação na barra fixa',
  //     image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 8,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 4,
  //     name: 'Box Jump',
  //     description: 'Salto no caixote, exercício de potência',
  //     image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 12,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 5,
  //     name: 'Kettlebell Swing',
  //     description: 'Balanço com kettlebell, trabalha posterior e core',
  //     image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80',
  //     difficulty: 'Iniciante',
  //     defaultReps: 20,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 6,
  //     name: 'Wall Ball',
  //     description: 'Arremesso de medicine ball na parede',
  //     image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 15,
  //     repUnit: 'repetições'
  //   }
  // ];

  //v2 IA chatgpt
  // const movements: Movement[] = [
  //   {
  //     id: 1,
  //     name: 'Air Squat',
  //     description: 'Agachamento livre, movimento fundamental do CrossFit',
  //     image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=80',
  //     difficulty: 'Iniciante',
  //     defaultReps: 15,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 2,
  //     name: 'Push-up',
  //     description: 'Flexão de braço tradicional',
  //     image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80',
  //     difficulty: 'Iniciante',
  //     defaultReps: 10,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 3,
  //     name: 'Pull-up',
  //     description: 'Elevação na barra fixa',
  //     image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 8,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 4,
  //     name: 'Box Jump',
  //     description: 'Salto no caixote, exercício de potência',
  //     image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 12,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 5,
  //     name: 'Kettlebell Swing',
  //     description: 'Balanço com kettlebell, trabalha posterior e core',
  //     image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80',
  //     difficulty: 'Iniciante',
  //     defaultReps: 20,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 6,
  //     name: 'Wall Ball',
  //     description: 'Arremesso de medicine ball na parede',
  //     image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 15,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 7,
  //     name: 'Deadlift',
  //     description: 'Levantamento terra com barra, trabalha todo o corpo',
  //     image: 'https://images.unsplash.com/photo-1585952901001-d607fd76ecdc?auto=format&fit=crop&q=80',
  //     difficulty: 'Avançado',
  //     defaultReps: 5,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 8,
  //     name: 'Thruster',
  //     description: 'Agachamento com impulso, combinado com press de ombro',
  //     image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80',
  //     difficulty: 'Avançado',
  //     defaultReps: 10,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 9,
  //     name: 'Burpee',
  //     description: 'Exercício de corpo inteiro com agachamento, flexão e salto',
  //     image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 15,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 10,
  //     name: 'Snatch',
  //     description: 'Levantamento olímpico, explosão e técnica',
  //     image: 'https://images.unsplash.com/photo-1585952901001-d607fd76ecdc?auto=format&fit=crop&q=80',
  //     difficulty: 'Avançado',
  //     defaultReps: 5,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 11,
  //     name: 'Clean and Jerk',
  //     description: 'Levantamento olímpico composto de dois movimentos',
  //     image: 'https://images.unsplash.com/photo-1585952901001-d607fd76ecdc?auto=format&fit=crop&q=80',
  //     difficulty: 'Avançado',
  //     defaultReps: 5,
  //     repUnit: 'repetições'
  //   },
  //   {
  //     id: 12,
  //     name: 'Rowing',
  //     description: 'Remada em máquina, excelente para cardio',
  //     image: 'https://images.unsplash.com/photo-1585952901001-d607fd76ecdc?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 500,
  //     repUnit: 'metros'
  //   },
  //   {
  //     id: 13,
  //     name: 'Double Unders',
  //     description: 'Pular corda com dois giros por salto',
  //     image: 'https://images.unsplash.com/photo-1585952901001-d607fd76ecdc?auto=format&fit=crop&q=80',
  //     difficulty: 'Intermediário',
  //     defaultReps: 50,
  //     repUnit: 'repetições'
  //   }
  // ];

  //v3 ClaudeIA
  const movements: Movement[] = [
    // Movimentos Fundamentais
    {
      id: 1,
      name: 'Air Squat',
      description: 'Agachamento livre, movimento fundamental do CrossFit que trabalha força de membros inferiores e mobilidade',
      image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6',
      difficulty: 'Iniciante',
      defaultReps: 15,
      repUnit: 'repetições',
      category: 'Fundamental'
    },
    {
      id: 2,
      name: 'Push-up',
      description: 'Flexão de braço tradicional que desenvolve força do tronco superior e estabilidade',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3',
      difficulty: 'Iniciante',
      defaultReps: 10,
      repUnit: 'repetições',
      category: 'Fundamental'
    },
    {
      id: 3,
      name: 'Pull-up',
      description: 'Elevação na barra fixa, fundamental para desenvolvimento de força nas costas e braços',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5',
      difficulty: 'Intermediário',
      defaultReps: 8,
      repUnit: 'repetições',
      category: 'Ginástica'
    },
    // Movimentos Olímpicos
    {
      id: 4,
      name: 'Clean',
      description: 'Levantamento olímpico que move a barra do chão até os ombros em um movimento explosivo',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Avançado',
      defaultReps: 5,
      repUnit: 'repetições',
      category: 'Weightlifting'
    },
    {
      id: 5,
      name: 'Snatch',
      description: 'Levantamento olímpico que move a barra do chão até acima da cabeça em um único movimento',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Avançado',
      defaultReps: 3,
      repUnit: 'repetições',
      category: 'Weightlifting'
    },
    // Movimentos Ginásticos
    {
      id: 6,
      name: 'Muscle-up',
      description: 'Movimento avançado que combina pull-up com dip, passando por cima da barra',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Avançado',
      defaultReps: 3,
      repUnit: 'repetições',
      category: 'Ginástica'
    },
    {
      id: 7,
      name: 'Handstand Push-up',
      description: 'Flexão de braço em parada de mãos, desenvolve força e equilíbrio',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Avançado',
      defaultReps: 5,
      repUnit: 'repetições',
      category: 'Ginástica'
    },
    // Condicionamento
    {
      id: 8,
      name: 'Box Jump',
      description: 'Salto no caixote, exercício de potência e condicionamento',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Intermediário',
      defaultReps: 12,
      repUnit: 'repetições',
      category: 'Condicionamento'
    },
    {
      id: 9,
      name: 'Double Unders',
      description: 'Pular corda com duas passadas por salto',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Intermediário',
      defaultReps: 50,
      repUnit: 'repetições',
      category: 'Condicionamento'
    },
    // Movimentos com Kettlebell
    {
      id: 10,
      name: 'Kettlebell Swing',
      description: 'Balanço com kettlebell, trabalha posterior e core',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Iniciante',
      defaultReps: 20,
      repUnit: 'repetições',
      category: 'Kettlebell'
    },
    {
      id: 11,
      name: 'Turkish Get-up',
      description: 'Movimento complexo com kettlebell que trabalha todo o corpo',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Avançado',
      defaultReps: 5,
      repUnit: 'repetições por lado',
      category: 'Kettlebell'
    },
    // Movimentos com Medicine Ball
    {
      id: 12,
      name: 'Wall Ball',
      description: 'Arremesso de medicine ball na parede combinando agachamento',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Intermediário',
      defaultReps: 15,
      repUnit: 'repetições',
      category: 'Medicine Ball'
    },
    // Movimentos de Peso Corporal Avançados
    {
      id: 13,
      name: 'Pistol Squat',
      description: 'Agachamento unilateral, requer força e equilíbrio',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Avançado',
      defaultReps: 5,
      repUnit: 'repetições por perna',
      category: 'Fundamental'
    },
    // Movimentos de Barra
    {
      id: 14,
      name: 'Toes to Bar',
      description: 'Levar os pés até a barra pendurado, trabalha core e coordenação',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Intermediário',
      defaultReps: 10,
      repUnit: 'repetições',
      category: 'Ginástica'
    },
    // Movimentos com Barra Olímpica
    {
      id: 15,
      name: 'Thruster',
      description: 'Combinação de front squat com push press',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Intermediário',
      defaultReps: 10,
      repUnit: 'repetições',
      category: 'Weightlifting'
    },
    {
      id: 16,
      name: 'Deadlift',
      description: 'Levantamento terra, fundamental para força posterior',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Intermediário',
      defaultReps: 8,
      repUnit: 'repetições',
      category: 'Weightlifting'
    },
    // Movimentos de Mobilidade
    {
      id: 17,
      name: 'Overhead Squat',
      description: 'Agachamento com barra acima da cabeça, teste de mobilidade e força',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Avançado',
      defaultReps: 8,
      repUnit: 'repetições',
      category: 'Weightlifting'
    },
    // Movimentos de Remo
    {
      id: 18,
      name: 'Rowing',
      description: 'Exercício no remo ergômetro, excelente para condicionamento',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Iniciante',
      defaultReps: 500,
      repUnit: 'metros',
      category: 'Cardio'
    },
    // Movimentos de Corrida
    {
      id: 19,
      name: 'Running',
      description: 'Corrida para condicionamento cardiovascular',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Iniciante',
      defaultReps: 400,
      repUnit: 'metros',
      category: 'Cardio'
    },
    // Movimentos com Corda
    {
      id: 20,
      name: 'Rope Climb',
      description: 'Subida na corda, trabalha força de membros superiores e grip',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: 'Avançado',
      defaultReps: 1,
      repUnit: 'subida',
      category: 'Ginástica'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
            alt="CrossFit Training"
            className="w-full h-full object-cover brightness-50"
            loading="lazy"
          />


          
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Monte Seu Treino</h1>
            <p className="text-xl">
              Selecione os movimentos e monte um treino personalizado de CrossFit
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Movement Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl text-cyan-950 font-bold mb-6">Movimentos Disponíveis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {movements && movements.map((movement) => (
                <MovementCard
                  key={movement.id}
                  movement={movement}
                  onAdd={handleAddMovement}
                />
              ))}
            </div>
          </div>

          {/* Workout Builder */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl text-cyan-950 font-bold mb-6">Construtor de Treino</h2>
            <div className="sticky top-6">
              <WorkoutBuilder
                selectedMovements={selectedMovements}
                onRemove={handleRemoveMovement}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6" />
            <span className="font-semibold">CrossFit Workout Builder</span>
          </div>
          <p className="text-gray-400">
            Construa treinos personalizados para seu nível
          </p>
        </div>
      </footer>
    </div>
  );
}
