import { useNavigate } from 'react-router-dom';
import React from "react"
import { Button } from '../components/Button';

interface Props {
  onBack?: () => void;
}

const UnderConstruction: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="py-32 text-center">
      <h1 className="text-4xl font-serif text-stone-900 mb-4">
        Страница в разработке
      </h1>
      <p className="text-stone-500 mb-8">
        Мы работаем над наполнением этого раздела.
      </p>
      <Button onClick={onBack ? onBack : () => navigate('/')}>
        Вернуться на главную
      </Button>
    </div>
  );
};

export default UnderConstruction;
