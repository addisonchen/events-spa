# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :eventsapi,
  ecto_repos: [EventsApi.Repo]

# Configures the endpoint
config :eventsapi, EventsApiWeb.Endpoint,
  url: [host: "http://events-spa.api.swoogity.com"],
  secret_key_base: "M6QdbpEzIOC0U0Rr1+uFkSXMAcsHiEiQkW+rjMo9HK9pfUw6cmtygld9AtMuyMwR",
  render_errors: [view: EventsApiWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: EventsApi.PubSub,
  live_view: [signing_salt: "qBgWqmK8"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
