defmodule EventsWeb.MeetingController do
  use EventsWeb, :controller

  alias Events.Meetings
  alias Events.Meetings.Meeting

  action_fallback EventsWeb.FallbackController

  def index(conn, _params) do
    meetings = Meetings.list_meetings()
    render(conn, "index.json", meetings: meetings)
  end

  def create(conn, %{"meeting" => meeting_params}) do
    case Meetings.create_meeting(meeting_params) do
      {:ok, %Meeting{} = meeting} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.meeting_path(conn, :show, meeting))
        |> render("show.json", meeting: meeting)
      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> put_view(EventsWeb.ErrorView)
        |> render("error.json", changeset: changeset)
      _ -> raise "Unknown response: meeting_controller -> create -> default case"
    end
  end

  def show(conn, %{"id" => id}) do
    meeting = Meetings.get_meeting!(id)
    render(conn, "showExpanded.json", meeting: meeting)
  end

  def update(conn, %{"id" => id, "meeting" => meeting_params}) do
    meeting = Meetings.get_meeting!(id)

    with {:ok, %Meeting{} = meeting} <- Meetings.update_meeting(meeting, meeting_params) do
      render(conn, "show.json", meeting: meeting)
    end
  end

  def delete(conn, %{"id" => id}) do
    meeting = Meetings.get_meeting!(id)

    with {:ok, %Meeting{}} <- Meetings.delete_meeting(meeting) do
      send_resp(conn, :no_content, "")
    end
  end
end
