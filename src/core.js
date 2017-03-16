import { List, Map } from 'immutable'

export function setEntries(state, entries) {
	return sta te.set('entries', List(entries));
}

export function next(state){
	const entries = state.get('entries');
	return state.merge({
		vote: Map({pair: entried.take(2)}),
		entries: entries.skip(2)
	});
}

	export function vote(state, entry){
		return state.updateIn(
			['vote', 'tally', entry],
			o,
			tally => tally + 1
		);
	}

