# [uv](https://docs.astral.sh/uv/#uv)

An extremely fast Python package and project manager, written in Rust.



![Shows a bar chart with benchmark results.](https://github.com/astral-sh/uv/assets/1309177/03aa9163-1c79-4a87-a31d-7a9311ed9310#only-dark)

*Installing* [*Trio*](https://trio.readthedocs.io/)*'s dependencies with a warm cache.*

## [Highlights](https://docs.astral.sh/uv/#highlights)

* 🚀 A single tool to replace `pip`, `pip-tools`, `pipx`, `poetry`, `pyenv`, `twine`, `virtualenv`, and more.
* ⚡️ [10-100x faster](https://github.com/astral-sh/uv/blob/main/BENCHMARKS.md) than `pip`.
* 🗂️ Provides [comprehensive project management](https://docs.astral.sh/uv/#projects), with a [universal lockfile](https://docs.astral.sh/uv/concepts/projects/layout/#the-lockfile).
* ❇️ [Runs scripts](https://docs.astral.sh/uv/#scripts), with support for [inline dependency metadata](https://docs.astral.sh/uv/guides/scripts/#declaring-script-dependencies).
* 🐍 [Installs and manages](https://docs.astral.sh/uv/#python-versions) Python versions.
* 🛠️ [Runs and installs](https://docs.astral.sh/uv/#tools) tools published as Python packages.
* 🔩 Includes a [pip-compatible interface](https://docs.astral.sh/uv/#the-pip-interface) for a performance boost with a familiar CLI.
* 🏢 Supports Cargo-style [workspaces](https://docs.astral.sh/uv/concepts/projects/workspaces/) for scalable projects.
* 💾 Disk-space efficient, with a [global cache](https://docs.astral.sh/uv/concepts/cache/) for dependency deduplication.
* ⏬ Installable without Rust or Python via `curl` or `pip`.
* 🖥️ Supports macOS, Linux, and Windows.

uv is backed by [Astral](https://astral.sh/), the creators of [Ruff](https://github.com/astral-sh/ruff).

## [Installation](https://docs.astral.sh/uv/#installation)

Install uv with our official standalone installer:

[macOS and Linux](https://docs.astral.sh/uv/#__tabbed_1_1)[Windows](https://docs.astral.sh/uv/#__tabbed_1_2)

```
curl -LsSf https://astral.sh/uv/install.sh | sh

```

Then, check out the [first steps](https://docs.astral.sh/uv/getting-started/first-steps/) or read on for a brief overview.

Tip

uv may also be installed with pip, Homebrew, and more. See all of the methods on the [installation page](https://docs.astral.sh/uv/getting-started/installation/).

## [Projects](https://docs.astral.sh/uv/#projects)

uv manages project dependencies and environments, with support for lockfiles, workspaces, and more, similar to `rye` or `poetry`:

```
uv init example


cd example

uv add ruff








uv run ruff check


uv lock


uv sync



```

See the [project guide](https://docs.astral.sh/uv/guides/projects/) to get started.

uv also supports building and publishing projects, even if they're not managed with uv. See the [packaging guide](https://docs.astral.sh/uv/guides/package/) to learn more.

## [Scripts](https://docs.astral.sh/uv/#scripts)

uv manages dependencies and environments for single-file scripts.

Create a new script and add inline metadata declaring its dependencies:

```
echo 'import requests; print(requests.get("https://astral.sh"))' > example.py

uv add --script example.py requests


```

Then, run the script in an isolated virtual environment:

```
uv run example.py




```

See the [scripts guide](https://docs.astral.sh/uv/guides/scripts/) to get started.

## [Tools](https://docs.astral.sh/uv/#tools)

uv executes and installs command-line tools provided by Python packages, similar to `pipx`.

Run a tool in an ephemeral environment using `uvx` (an alias for `uv tool run`):

```
uvx pycowsay 'hello world!'














```

Install a tool with `uv tool install`:

```
uv tool install ruff





ruff --version


```

See the [tools guide](https://docs.astral.sh/uv/guides/tools/) to get started.

## [Python versions](https://docs.astral.sh/uv/#python-versions)

uv installs Python and allows quickly switching between versions.

Install multiple Python versions:

```
uv python install 3.10 3.11 3.12








```

Download Python versions as needed:

```
uv venv --python 3.12.0




uv run --python pypy@3.8 -- python





```

Use a specific Python version in the current directory:

```
uv python pin 3.11


```

See the [installing Python guide](https://docs.astral.sh/uv/guides/install-python/) to get started.

## [The pip interface](https://docs.astral.sh/uv/#the-pip-interface)

uv provides a drop-in replacement for common `pip`, `pip-tools`, and `virtualenv` commands.

uv extends their interfaces with advanced features, such as dependency version overrides, platform-independent resolutions, reproducible resolutions, alternative resolution strategies, and more.

Migrate to uv without changing your existing workflows — and experience a 10-100x speedup — with the `uv pip` interface.

Compile requirements into a platform-independent requirements file:

```
uv pip compile docs/requirements.in \
   --universal \
   --output-file docs/requirements.txt


```

Create a virtual environment:

```
uv venv




```

Install the locked requirements:

```
uv pip sync docs/requirements.txt







```

See the [pip interface documentation](https://docs.astral.sh/uv/pip/) to get started.
