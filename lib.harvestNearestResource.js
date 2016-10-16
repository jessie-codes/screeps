const harvestNearestResource = (creep) => {
	const source = creep.pos.findClosestByRange(FIND_SOURCES);
	if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
		creep.moveTo(source);
	}
};

module.exports = harvestNearestResource;