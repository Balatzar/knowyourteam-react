import Airtable from "airtable";
import shuffle from "lodash.shuffle";
import uniq from "lodash.uniq";
import flatten from "lodash.flatten";

const fetchPeople = callBack => {
  var base = new Airtable({
    apiKey: process.env.REACT_APP_PUBLIC_READONLY_AIRTABLE_KEY,
  }).base("appKseGI0eXLlGvr1");

  const fetchedPeople = [];

  base("People")
    .select()
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          fetchedPeople.push(record.fields);
        });
        fetchNextPage(); // next 100
      },
      function done(err) {
        if (err) {
          console.error(err);
        } else {
          const projectIds = uniq(
            flatten(fetchedPeople.map(p => p["Projects"]))
          );
          const projectQuery =
            "OR( RECORD_ID() = '" +
            projectIds.join("', RECORD_ID() = '") +
            "')";
          const projects = {};

          base("Projects")
            .select({ filterByFormula: projectQuery })
            .eachPage(
              function page(records, fetchNextPage) {
                records.forEach(function(record) {
                  projects[record.id] = record.fields;
                });
                fetchNextPage(); // next 100
              },
              function done(err) {
                if (err) {
                  console.error(err);
                } else {
                  const randFetchedPeople = shuffle(
                    fetchedPeople.map(p => {
                      return {
                        ...p,
                        Projects: p["Projects"]
                          ? p["Projects"].map(projectId => projects[projectId])
                          : [],
                      };
                    })
                  );
                  callBack(randFetchedPeople);
                }
              }
            );
        }
      }
    );
};

export { fetchPeople };
