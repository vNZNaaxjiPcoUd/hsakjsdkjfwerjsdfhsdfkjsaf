# Ollama in macOS

## How to install, Ollama on Windows, macOS, and Linux and run models using Ollama commands-Step-by-Step Guide:

[**Ollama Introduction:**Ollama is a tool which is used to set up and run opensource LLM in our local.](https://medium.com/@sridevi17j?source=post_page---byline--a00f21164bf3--------------------------------)

**How to install Ollama:** This article explains to install Ollama in all the three Major OS(Windows, MacOS, Linux) and also provides the list of available commands that we use with Ollama once installed.

**Download link:**- [https://ollama.com/download](https://ollama.com/download)

**Windows Installation:** Installing Ollama on Windows is straightforward. After downloading the executable file, simply run it, and Ollama will be installed automatically.

**MacOS Installation:** After the download completes on MacOS, you can unzip the downloaded file. Then, simply drag the Ollama.app folder into your Applications folder.

**Linux installation:** Just run below command in your terminal. Ollama will be installed.

curl -fsSL [https://ollama.com/install.sh](https://ollama.com/install.sh) | sh

Now that Ollama installation is complete, let’s explore how to use it.

Before getting into commands, explore the link below to discover the diverse range of LLM collections available in the Ollama library. Once you’ve browsed the library, identify the LLM you’d like to install locally.

[## library### Get up and running with large language models.ollama.com](https://ollama.com/library?source=post_page-----a00f21164bf3--------------------------------)

Before executing any Ollama commands in the terminal, launch your installed Ollama app or open terminal and type “ollama serve” which is a command to start ollama app. After launching the Ollama app, open your terminal and experiment with the commands listed below. Make sure to prefix each command with “Ollama”.

We are going to see below ollama commands:

ollama --help
ollama serve
ollama list
ollama rm
ollama run
ollama pull

**Ollama help:**

C:\Users\sride>ollama --help
Large language model runner

Usage:
&#x20; ollama \[flags]
&#x20; ollama \[command]

Available Commands:
&#x20; serve       Start ollama
&#x20; create      Create a model from a Modelfile
&#x20; show        Show information for a model
&#x20; run         Run a model
&#x20; pull        Pull a model from a registry
&#x20; push        Push a model to a registry
&#x20; list        List models
&#x20; cp          Copy a model
&#x20; rm          Remove a model
&#x20; help        Help about any command

**Ollama serve:**

Ollama serve is the command line option to start your ollama app.

**Ollama list:**

When using the “Ollama list” command, it displays the models that have already been pulled or retrieved.

C:\Users\sride>ollama list
NAME            ID              SIZE    MODIFIED
gemma:2b        b50d6c999e59    1.7 GB  18 hours ago
llama2\:latest   78e26419b446    3.8 GB  14 hours ago

**Ollama rm:**

To remove an LLM from your local environment, you can use the “Ollama rm” command followed by the name of the LLM you wish to remove. For example, to remove an LLM named “llama2”, you would execute “ollama rm llama2”. After executing this command, the model will no longer appear in the Ollama list.

C:\Users\sride>ollama rm llama2
deleted 'llama2'

Now you can verify whether llama2 has been deleted or not. Check below.

C:\Users\sride>ollama list
NAME            ID              SIZE    MODIFIED
gemma:2b        b50d6c999e59    1.7 GB  18 hours ago

**Ollama run:**

Below, you can see an example of how to use the “Ollama run” command to pull the specified LLM and initiate its execution locally. Once pulled and started, try querying the LLM like below.

C:\Users\sride>ollama run llama2
pulling manifest
pulling 8934d96d3f08... 100% ▕████████████████████████████████████████████████████████▏ 3.8 GB
pulling 8c17c2ebb0ea... 100% ▕████████████████████████████████████████████████████████▏ 7.0 KB
pulling 7c23fb36d801... 100% ▕████████████████████████████████████████████████████████▏ 4.8 KB
pulling 2e0493f67d0c... 100% ▕████████████████████████████████████████████████████████▏   59 B
pulling fa304d675061... 100% ▕████████████████████████████████████████████████████████▏   91 B
pulling 42ba7f8a01dd... 100% ▕████████████████████████████████████████████████████████▏  557 B
verifying sha256 digest
writing manifest
removing any unused layers
success
\>>> give me two lines about ollama

Of course! Here are two lines about an ollama:

Ollamas are gentle giants, with their soft fur and cute little noses. They're also very smart and can be trained
to do tricks!

\>>> Send a message (/? for help)

After completing the process, you can verify whether the newly pulled LLM is listed in the Ollama list.

PS C:\Users\sride> ollama list
NAME            ID              SIZE    MODIFIED
gemma:2b        b50d6c999e59    1.7 GB  20 hours ago
llama2\:latest   78e26419b446    3.8 GB  33 minutes ago
PS C:\Users\sride>

**Ollama pull:**

The distinction between “Ollama pull” and “Ollama run” lies in their actions regarding the LLM. “Ollama pull” solely retrieves or fetches the model without initiating its execution, whereas “Ollama run” both pulls the model and immediately begins its execution, so that we can start querying immediately.

In my next post, I’ll provide detailed explanations for the following Ollama commands: “serve”, “create”, “push”, “cp”, and “show”. These explanations will offer a more understanding of their functionalities.
