import Circle from './components/circle';

function render(component, root) {
  root.append(component);
}

function main() {
  const root = document.getElementById('root');
  render(Circle({ radius: 30 }), root);
}

main();