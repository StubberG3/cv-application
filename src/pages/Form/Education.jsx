import Input from '../../components/Input.jsx';

export default function Education({school="University of Pennsylvania", major="Software Engineering", graduation_date="05/01/2025"}) {
  return (
    <section>
      <h6>Education</h6>
      <div className="grid gap-6 py-4 mb-6 md:grid-cols-2">
        <Input id="school" label="School" placeholder={school} />
        <Input id="major" label="Major" placeholder={major} />
        <Input id="graduation_date" label="Graduation Date" type="date" placeholder={graduation_date} />
      </div>
    </section>
  )
}