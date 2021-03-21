defmodule EventsWeb.MeetingView do
  use EventsWeb, :view
  alias EventsWeb.MeetingView

  def render("index.json", %{meetings: meetings}) do
    %{data: render_many(meetings, MeetingView, "meeting.json")}
  end

  def render("show.json", %{meeting: meeting}) do
    %{data: render_one(meeting, MeetingView, "meeting.json")}
  end

  def render("meeting.json", %{meeting: meeting}) do
    %{id: meeting.id,
      name: meeting.name,
      date: meeting.date,
      description: meeting.description}
  end
end
