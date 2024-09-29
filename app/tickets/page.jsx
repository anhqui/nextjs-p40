import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <div>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
      </nav>
      <TicketList />
    </div>
  );
}
