# Quick
Quick is a CLI that allows you to easily manage cloned repositories.

| Command | Description | options |
| ------- | ------- | ------- |
| clone [URL] | This will clone a repository into ```~/src/[username]/``` and generate the change directory command for you | none |
| push [MESSAGE] | This will push and commit your current changes with an optional message | none |
| pr | This will open a pr | none |
| create | This will create a Github repository and clone it to the correct directory | -p |

## Usage

### Installation
```bash
npm i -g @dylanplayer/quick
```

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
