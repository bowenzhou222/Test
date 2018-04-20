default: start

start:
	@yarn start

.PHONY: setup
setup:
	brew update
	brew install yarn
	brew install watchman

.PHONY: dep
dep:
	@yarn install

test:
	@yarn test