import Input from '../../components/Input.jsx';

export default function Work() {
  return (
    <section>
      <h6>Work</h6>
      <div className="grid gap-6 mb-6 py-4 md:grid-cols-2">
        <Input id="company_name" label="Company Name" placeholder="Company ABC" />
        <Input id="position_title" label="Position Title" placeholder="Web Developer" />
        <Input id="responsibilities" label="Responsibilities" placeholder="Developing websites"/>
        <Input id="position_start_date" label="Position Start Date" type="date" placeholder="03/17/2024" />
        <Input id="position_end_date" type="date" label="Position End Date" placeholder="03/17/2025" />
      </div>
    </section>
  )
}