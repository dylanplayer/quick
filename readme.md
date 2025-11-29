# Quick

Quick is a CLI that allows you to easily manage cloned repositories.

| Command        | Description                                                                                                                     | options |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| clone [URL]    | This will clone a repository into `~/src/[username]/` and change to that directory (if repo already exists, just changes to it) | none    |
| push [MESSAGE] | This will push and commit your current changes with an optional message                                                         | none    |
| pr             | This will open a pr                                                                                                             | none    |
| create         | This will create a Github repository and clone it to the correct directory                                                      | -p      |
| find           | Find local repositories that start with the given name and print out the cd command                                             | none    |
| cd             | Find and change to a local repository that starts with the given name                                                           | none    |

## Quick Start

```bash
brew tap dylanplayer/devtools
```

```bash
brew install dylanplayer/devtools/quick
```

## Usage

### Clone Repository

```bash
quick clone https://github.com/user/example
```

### Push & Commit

```bash
quick push
```

### Open PR

```bash
quick pr
```

### Create Project ( pubilc )

```bash
quick create example
```

### Create Project ( private )

```bash
quick create example -p
```

### Change to Repository

```bash
quick cd example
```
