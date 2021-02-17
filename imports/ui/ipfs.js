import { Meteor } from "meteor/meteor";
import ipfsClient from "ipfs-http-client";

const apiUrl = "https://ipfs.infura.io:5001";

const ipfs = ipfsClient(Meteor.settings.public.IPFS.apiUrl);

export const addFile = async (fileContent) =>
  ipfs.add({ content: fileContent }, { pin: true }).then((res) => res[0]);

export const catFile = ipfs.cat;
