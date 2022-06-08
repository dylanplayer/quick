# Quick
Quick is a CLI that allows you to easily manage cloned repositories.

| Command | Description |
| ------- | ----- |
| clone [URL] | This will clone a repository into ```~/src/[username]/``` and generate the change directory command for you |
| push [MESSAGE] | This will push and commit your current changes with an optional message |
| pr | This will open a pr |

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
