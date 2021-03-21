defmodule EventsWeb.SessionController do
  use EventsWeb, :controller

  def create(conn, %{"name" => name, "password" => password}) do
    user = Events.Users.authenticate(name, password)
    # TODO; Verify password

    session = %{
      user_id: user.id,
      name: user.name,
      email: user.email,
      token: Phoenix.Token.sign(conn, "user_id", user.id)
    }
    conn
    |> put_resp_header("content-type", "application/json; charset=UTF-8")
    |> send_resp(:created, Jason.encode!(session))
  end
end
