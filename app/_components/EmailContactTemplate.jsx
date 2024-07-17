function EmailContactTemplate({
  newClientName,
  email,
  service,
  budget,
  message,
}) {
  return (
    <div>
      <h1>Yeyy😎, {newClientName} need some service</h1>
      <p>Name: {newClientName}</p>
      <p>Email: {email}</p>
      <p>Service: {service}</p>
      <p>Budget: {budget}</p>
      <p>Message: {message}</p>
    </div>
  );
}

export default EmailContactTemplate;
