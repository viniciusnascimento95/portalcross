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

  const movements: Movement[] = [
    {
      id: 1,
      name: 'Air Squat',
      description: 'Agachamento livre, movimento fundamental do CrossFit',
      image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=80',
      difficulty: 'Iniciante',
      defaultReps: 15,
      repUnit: 'repetições'
    },
    {
      id: 2,
      name: 'Push-up',
      description: 'Flexão de braço tradicional',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80',
      difficulty: 'Iniciante',
      defaultReps: 10,
      repUnit: 'repetições'
    },
    {
      id: 3,
      name: 'Pull-up',
      description: 'Elevação na barra fixa',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80',
      difficulty: 'Intermediário',
      defaultReps: 8,
      repUnit: 'repetições'
    },
    {
      id: 4,
      name: 'Box Jump',
      description: 'Salto no caixote, exercício de potência',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80',
      difficulty: 'Intermediário',
      defaultReps: 12,
      repUnit: 'repetições'
    },
    {
      id: 5,
      name: 'Kettlebell Swing',
      description: 'Balanço com kettlebell, trabalha posterior e core',
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80',
      difficulty: 'Iniciante',
      defaultReps: 20,
      repUnit: 'repetições'
    },
    {
      id: 6,
      name: 'Wall Ball',
      description: 'Arremesso de medicine ball na parede',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80',
      difficulty: 'Intermediário',
      defaultReps: 15,
      repUnit: 'repetições'
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
