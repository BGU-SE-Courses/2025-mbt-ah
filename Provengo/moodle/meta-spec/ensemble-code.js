// @provengo summon ctrl

/**
 * List of events "of interest" that we want test suites to cover.
 */
const GOALS = [
    any(/StartComplete/),      // We want the teacher’s initial steps done
    any(/AssignmentCreated/),  // The teacher created an assignment
    any(/DocxFileTypeSet/),    // The teacher changed the file type to docx
    any(/StudentSubmission/)   // The student submitted the assignment
];

const ALL_PAIRS = buildAllPairs(GOALS);
function buildAllPairs(eventsArray) {
    let pairs = [];
    for (let i = 0; i < eventsArray.length; i++) {
        for (let j = i + 1; j < eventsArray.length; j++) {
            pairs.push([eventsArray[i], eventsArray[j]]);
        }
    }
    return pairs;
}

// Return the number (0–DOMAIN_GOALS.length) of domain events found in an ensemble
function countDomainGoalsMet(ensemble) {
    // Copy the goals array so we can track “unreached” ones
    let unreached = GOALS.slice();

    // For each test (trace) in the suite
    for (let trace of ensemble) {
        // For each event in that trace
        for (let evt of trace) {
            // Check if evt matches any unreached goal
            for (let i = unreached.length - 1; i >= 0; i--) {
                if (unreached[i].contains(evt)) {
                    unreached.splice(i, 1);
                }
            }
            // If we already have no unreached goals, we can break early
            if (unreached.length === 0) break;
        }
        if (unreached.length === 0) break;
    }

    // The number of domain-specific events we found
    return GOALS.length - unreached.length;
}


/**
 * Checks how many pairs of events we covered (each pair E1, E2
 * found in at least one test trace in any order).
 */
function countPairsMet(ensemble) {
    // Copy pairs so we track which are still not covered
    let uncoveredPairs = ALL_PAIRS.slice();

    for (let trace of ensemble) {
        // We'll see which events occur in this trace
        let eventsInTrace = trace.map(e => e);

        // For each pair in uncoveredPairs, check if both E1 and E2 appear
        // in `eventsInTrace` in any order
        for (let i = uncoveredPairs.length - 1; i >= 0; i--) {
            const [E1, E2] = uncoveredPairs[i];
            let foundE1 = false, foundE2 = false;
            for (let evt of eventsInTrace) {
                // see if matches E1
                if (!foundE1 && E1.contains(evt)) {
                    foundE1 = true;
                }
                // see if matches E2
                if (!foundE2 && E2.contains(evt)) {
                    foundE2 = true;
                }
                if (foundE1 && foundE2) {
                    // This trace covers that pair in some order
                    uncoveredPairs.splice(i, 1); // remove it from uncovered
                    break; // no need to check more in this trace
                }
            }
        }
        if (uncoveredPairs.length === 0) break; // all pairs covered
    }

    return ALL_PAIRS.length - uncoveredPairs.length;
}

function domainRanking(ensemble) {
    let met = countDomainGoalsMet(ensemble);
    return (met / GOALS.length) * 100;
}

/**
 * Pairwise coverage in percentage:
 * [the fraction of pairs covered] * 100
 */
function twoWayRanking(ensemble) {
    let coveredPairs = countPairsMet(ensemble);
    return (coveredPairs / ALL_PAIRS.length) * 100;
}


/**
 * By default, pick *domainRanking* or *twoWayRanking*.
 * Example: use the domain-specific coverage as default.
 */
function rankingFunction(ensemble) {
    return twoWayRanking(ensemble);
}
