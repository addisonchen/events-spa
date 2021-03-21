defmodule Events.Comments.Comment do
  use Ecto.Schema
  import Ecto.Changeset

  schema "comments" do
    field :body, :string
    belongs_to :user, Events.Users.User, on_delete: :delete_all
    belongs_to :meeting, Events.Meetings.Meeting, on_delete: :delete_all

    timestamps()
  end

  @doc false
  def changeset(comment, attrs) do
    comment
    |> cast(attrs, [:body, :user_id, :meeting_id])
    |> validate_required([:body, :user_id, :meeting_id])
  end
end
