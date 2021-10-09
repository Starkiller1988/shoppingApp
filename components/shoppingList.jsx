import '../components/shoppingList.css';

export const ShoppingList = ({name, category}) => {
  return (
    <span className="list-item">
        {name}
    </span>
  );
};