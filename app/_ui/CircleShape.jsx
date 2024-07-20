function CircleShape({ position = true }) {
  return (
    <div
      className={`absolute rounded-full bg-primary sm:-right-6 sm:h-6 sm:w-6 ${position && "-right-4 -top-4 h-4 w-4"}`}
    />
  );
}

export default CircleShape;
