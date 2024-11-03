import { Plus } from 'lucide-react';
import { Movement } from '../types';

interface MovementCardProps {
  movement: Movement;
  onAdd: (movement: Movement) => void;
}

export function MovementCard({ movement, onAdd }: MovementCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={movement.image} alt={movement.name} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl text-cyan-800 font-semibold mb-2">{movement.name}</h3>
        <p className="text-gray-600 mb-4">{movement.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">
            Dificuldade: {movement.difficulty} 
          </span>
          <span className="text-sm font-medium text-gray-500">
            Categoria : {movement.category}
          </span>
          <button
            onClick={() => onAdd(movement)}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
            title="Adicionar ao treino"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}