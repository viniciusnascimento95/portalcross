import { X } from 'lucide-react';
import { Movement } from '../types';

interface WorkoutBuilderProps {
  selectedMovements: Movement[];
  onRemove: (index: number) => void;
}

export function WorkoutBuilder({ selectedMovements, onRemove }: WorkoutBuilderProps) {
  if (selectedMovements.length === 0) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-gray-500 text-center">
          Selecione movimentos para montar seu treino
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl text-cyan-950 font-semibold mb-4">Seu Treino</h3>
      <div className="space-y-3">
        {selectedMovements.map((movement, index) => (
          <div
            key={`${movement.id}-${index}`}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <img
                src={movement.image}
                alt={movement.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-cyan-800">{movement.name}</h4>
                <p className="text-sm text-gray-600">
                  {movement.defaultReps} {movement.repUnit}
                </p>
              </div>
            </div>
            <button
              onClick={() => onRemove(index)}
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="Remover movimento"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-cyan-800 mb-2">Sugestão de Treino:</h4>
        <p className="text-gray-600">
          Realize {selectedMovements.length} rounds dos movimentos selecionados.
          Descanse 1 minuto entre rounds.
        </p>
      </div>
    </div>
  );
}