#!/usr/bin/env node
import { runCli } from './cli';

const main = async () => {
  runCli();
};

main().catch((err) => {
  console.log(err);
});
