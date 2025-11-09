import React, { useState, useMemo } from "react";
import { IlamyCalendar } from "@ilamy/calendar";

const RoutineCalendar = ({ routines }) => {
  // Ejemplo de fallback si no hay rutinas
  const fallback = [
    {
      id: "1",
      title: "Rutina de Piernas",
      start: new Date("2025-11-04T09:00:00"),
      end: new Date("2025-11-04T10:00:00"),
      description: "Fuerza – cuádriceps y glúteos",
      color: "#f97316",
    },
    {
      id: "2",
      title: "Rutina de Pecho",
      start: new Date("2025-11-06T17:00:00"),
      end: new Date("2025-11-06T18:00:00"),
      description: "Press banca y variantes",
      color: "#3b82f6",
    },
  ];

  const events = useMemo(() => {
    if (!routines || routines.length === 0) return fallback;

    return routines.map((r, i) => ({
      id: r.id || String(i),
      title: r.name,
      start: new Date(r.startDate),
      end: new Date(new Date(r.startDate).getTime() + 60 * 60 * 1000), // 1 hora
      description: r.description || "",
      color: r.isCertified ? "#22c55e" : "#3b82f6",
    }));
  }, [routines]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
        Calendario de Rutinas
      </h3>

      <div className="h-[650px]">
        <IlamyCalendar
          events={events}
          initialView="month"
          views={["month", "week", "day"]}
          firstDayOfWeek="monday"
          locale="es"
          onEventClick={setSelectedEvent}
          onCellClick={(date) => console.log("Clic en fecha:", date)}
          onViewChange={(view) => console.log("Vista cambiada a:", view)}
          renderEvent={(ev) => (
            <div
              className="px-2 py-1 rounded text-white text-sm"
              style={{ backgroundColor: ev.color }}
            >
              {ev.title}
            </div>
          )}
        />
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSelectedEvent(null)}
          />
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 z-10">
            <h4 className="text-lg font-bold mb-2">{selectedEvent.title}</h4>
            <p className="text-sm text-gray-600 mb-2">
              {selectedEvent.description}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Inicio:</strong>{" "}
              {selectedEvent.start.toLocaleString()}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Fin:</strong> {selectedEvent.end.toLocaleString()}
            </p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              onClick={() => setSelectedEvent(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutineCalendar;
