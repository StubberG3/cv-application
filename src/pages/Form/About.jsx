import Input from '../../components/Input.jsx';

export default function About() {
  return (
    <section>
      <h6>About</h6>
      <div className="grid gap-6 mb-6 py-4 md:grid-cols-2">
          <Input id="first_name" label="First Name" placeholder="Chris" required={true}/>
          <Input id="last_name" label="Last Name" placeholder="Bacon" required={true} />
          <Input id="email" label="Email" placeholder="chrispbacon@gmail.com" required={true} />
          <Input id="phone" label="Phone" placeholder="856-910-9190" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
      </div>
    </section>
  )
}