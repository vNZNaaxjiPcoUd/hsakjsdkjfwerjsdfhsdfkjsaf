n8n
===

# Docker Installation[#](https://docs.n8n.io/hosting/installation/docker/#docker-installation "Permanent link")

n8n recommends using [Docker](https://www.docker.com/) for most self-hosting needs. It provides a clean, isolated environment, avoids operating system and tooling incompatibilities, and makes database and environment management simpler.

You can also use n8n in Docker with [Docker Compose](https://docs.n8n.io/hosting/installation/server-setups/docker-compose/). You can find Docker Compose configurations for various architectures in the [n8n-hosting repository](https://github.com/n8n-io/n8n-hosting).

Self-hosting knowledge prerequisites

Self-hosting n8n requires technical knowledge, including:

* Setting up and configuring servers and containers
* Managing application resources and scaling
* Securing servers and applications
* Configuring n8n

n8n recommends self-hosting for expert users. Mistakes can lead to data loss, security issues, and downtime. If you aren't experienced at managing servers, n8n recommends [n8n Cloud](https://n8n.io/cloud/).

## Prerequisites[#](https://docs.n8n.io/hosting/installation/docker/#prerequisites "Permanent link")

Before proceeding, install Docker:

* [Docker Desktop](https://docs.docker.com/get-docker/) is available for Mac, Windows, and Linux. Docker Desktop includes the Docker Engine and Docker Compose.
* [Docker Engine](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/linux/) are also available as separate packages for Linux. Use this for Linux machines without a graphical environment or when you don't want the Docker Desktop UI.

Latest and Next versions

n8n releases a new minor version most weeks. The `latest` version is for production use. `next` is the most recent release. You should treat `next` as a beta: it may be unstable. To report issues, use the [forum](https://community.n8n.io/c/questions/12).

Current `latest`: 1.108.1
Current `next`: 1.109.0

## Starting n8n[#](https://docs.n8n.io/hosting/installation/docker/#starting-n8n "Permanent link")

From your terminal, run the following commands, replacing the `<YOUR_TIMEZONE>` placeholders with [your timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List):

| docker volume create n8n\_data&#xA;&#xA;docker run -it --rm \\&#xA; \--name n8n \\&#xA; -p 5678:5678 \\&#xA; -e GENERIC\_TIMEZONE\="\<YOUR\_TIMEZONE>" \\&#xA; -e TZ\="\<YOUR\_TIMEZONE>" \\&#xA; -e N8N\_ENFORCE\_SETTINGS\_FILE\_PERMISSIONS\=true \\&#xA; -e N8N\_RUNNERS\_ENABLED\=true \\&#xA; -v n8n\_data:/home/node/.n8n \\&#xA; docker.n8n.io/n8nio/n8n&#xA; |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

This command creates a volume to store persistent data, downloads the required n8n image, and starts the container with the following settings:

* Maps and exposes port `5678` on the host.
* Sets the timezone for the container:
  * the `TZ` environment variable sets the system timezone to control what scripts and commands like `date` return.
  * the [`GENERIC_TIMEZONE` environment variable](https://docs.n8n.io/hosting/configuration/environment-variables/timezone-localization/) sets the correct timezone for schedule-oriented nodes like the [Schedule Trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/).
* Enforces secure file permissions for the n8n configuration file.
* Enables [task runners](https://docs.n8n.io/hosting/configuration/task-runners/), the recommended way of executing tasks in n8n.
* Mounts the `n8n_data` volume to the `/home/node/.n8n` directory to persist your data across container restarts.

Once running, you can access n8n by opening: [http://localhost:5678](http://localhost:5678/)

## Using with PostgreSQL[#](https://docs.n8n.io/hosting/installation/docker/#using-with-postgresql "Permanent link")

By default, n8n uses SQLite to save [credentials](https://docs.n8n.io/glossary/#credential-n8n), past executions, and workflows. n8n also supports PostgreSQL, configurable using environment variables as detailed below.

Persisting the `.n8n` directory still recommended

When using PostgreSQL, n8n doesn't need to use the `.n8n` directory for the SQLite database file. However, the directory still contains other important data like encryption keys, instance logs, and source control feature assets. While you can work around some of these requirements, (for example, by setting the [`N8N_ENCRYPTION_KEY` environment variable](https://docs.n8n.io/hosting/configuration/environment-variables/deployment/)), it's best to continue mapping a persistent volume for the directory to avoid potential issues.

To use n8n with PostgreSQL, execute the following commands, replacing the placeholders (depicted within angled brackets, for example `<POSTGRES_USER>`) with your actual values:

| docker volume create n8n\_data&#xA;&#xA;docker run -it --rm \\&#xA; \--name n8n \\&#xA; -p 5678:5678 \\&#xA; -e GENERIC\_TIMEZONE\="\<YOUR\_TIMEZONE>" \\&#xA; -e TZ\="\<YOUR\_TIMEZONE>" \\&#xA; -e N8N\_ENFORCE\_SETTINGS\_FILE\_PERMISSIONS\=true \\&#xA; -e N8N\_RUNNERS\_ENABLED\=true \\&#xA; -e DB\_TYPE\=postgresdb \\&#xA; -e DB\_POSTGRESDB\_DATABASE\=\<POSTGRES\_DATABASE> \\&#xA; -e DB\_POSTGRESDB\_HOST\=\<POSTGRES\_HOST> \\&#xA; -e DB\_POSTGRESDB\_PORT\=\<POSTGRES\_PORT> \\&#xA; -e DB\_POSTGRESDB\_USER\=\<POSTGRES\_USER> \\&#xA; -e DB\_POSTGRESDB\_SCHEMA\=\<POSTGRES\_SCHEMA> \\&#xA; -e DB\_POSTGRESDB\_PASSWORD\=\<POSTGRES\_PASSWORD> \\&#xA; -v n8n\_data:/home/node/.n8n \\&#xA; docker.n8n.io/n8nio/n8n&#xA; |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

You can find a complete `docker-compose` file for PostgreSQL in the [n8n hosting repository](https://github.com/n8n-io/n8n-hosting/tree/main/docker-compose/withPostgres).

## Updating[#](https://docs.n8n.io/hosting/installation/docker/#updating "Permanent link")

To update n8n, in Docker Desktop, navigate to the **Images** tab and select **Pull** from the context menu to download the latest n8n image:

[![Docker Desktop](https://docs.n8n.io/_images/hosting/installation/docker/docker_desktop.png)](https://docs.n8n.io/_images/hosting/installation/docker/docker_desktop.png)

You can also use the command line to pull the latest, or a specific version:

| # Pull latest (stable) version&#xA;docker pull docker.n8n.io/n8nio/n8n&#xA;&#xA;# Pull specific version&#xA;docker pull docker.n8n.io/n8nio/n8n:1.81.0&#xA;&#xA;# Pull next (unstable) version&#xA;docker pull docker.n8n.io/n8nio/n8n\:next&#xA; |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

After pulling the updated image, stop your n8n container and start it again. You can also use the command line. Replace `<container_id>` in the commands below with the container ID you find in the first command:

| # Find your container ID&#xA;docker ps -a&#xA;&#xA;# Stop the container with the \`\<container\_id>\`&#xA;docker stop \<container\_id>&#xA;&#xA;# Remove the container with the \`\<container\_id>\`&#xA;docker rm \<container\_id>&#xA;&#xA;# Start the container&#xA;docker run --name\=\<container\_name> \[options] -d docker.n8n.io/n8nio/n8n&#xA; |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### Updating Docker Compose[#](https://docs.n8n.io/hosting/installation/docker/#updating-docker-compose "Permanent link")

If you run n8n using a Docker Compose file, follow these steps to update n8n:

| # Navigate to the directory containing your docker compose file&#xA;cd \</path/to/your/compose/file/directory>&#xA;&#xA;# Pull latest version&#xA;docker compose pull&#xA;&#xA;# Stop and remove older version&#xA;docker compose down&#xA;&#xA;# Start the container&#xA;docker compose up -d&#xA; |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## n8n with tunnel[#](https://docs.n8n.io/hosting/installation/docker/#n8n-with-tunnel "Permanent link")

Danger

Use this for local development and testing. It isn't safe to use it in production.

To use webhooks for trigger nodes of external services like GitHub, n8n has to be reachable from the web. n8n runs a [tunnel service](https://github.com/localtunnel/localtunnel) that can redirect requests from n8n's servers to your local n8n instance.

Start n8n with `--tunnel` by running:

| docker volume create n8n\_data&#xA;&#xA;docker run -it --rm \\&#xA; \--name n8n \\&#xA; -p 5678:5678 \\&#xA; -e GENERIC\_TIMEZONE\="\<YOUR\_TIMEZONE>" \\&#xA; -e TZ\="\<YOUR\_TIMEZONE>" \\&#xA; -e N8N\_ENFORCE\_SETTINGS\_FILE\_PERMISSIONS\=true \\&#xA; -e N8N\_RUNNERS\_ENABLED\=true \\&#xA; -v n8n\_data:/home/node/.n8n \\&#xA; docker.n8n.io/n8nio/n8n \\&#xA; start --tunnel&#xA; |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Next steps[#](https://docs.n8n.io/hosting/installation/docker/#next-steps "Permanent link")

* Find more information about Docker setup in the README file for the [Docker image](https://github.com/n8n-io/n8n/tree/master/docker/images/n8n).
* Learn more about [configuring](https://docs.n8n.io/hosting/configuration/environment-variables/) and [scaling](https://docs.n8n.io/hosting/scaling/overview/) n8n.
* Or explore using n8n: try the [Quickstarts](https://docs.n8n.io/try-it-out/).
