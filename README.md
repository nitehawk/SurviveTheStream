# Survive the Stream

Survive the stream is a meta game mode for Minecraft originally created by @DeciTM.

This repo contains a set of scripts for running STS streams.

## Requirements

* Linux system capable of running Minecraft server
  * No... I won't be making these scripts work for windows.
  * This can be an AWS instance (scripts were developed on/for AWS)
    * Planned:  AWS tools to autoconfigure a suitable instance for stream (CFT w/ script)

## High level

We make use of tmux to manage the various elements of the game.   One pane has the server running.   A second
pane processes the server output looking for specific trigger events.   A third pane runs additional timed events.
Finally, the 4th pane is available for sending configuration related commands.

## STS round

+ Script deletes all world data, clears player data and bans, copies prepared MC config files
+ Minecraft server will be launched with a random seed
+ Event processor ensures world is on peaceful and stops time at morning of day 0
+ Host connects to server - event processor puts host into creative mode
+ Host locates a suitable spot to run the game
+ Host sends 'init' command in chat
+ Event processor initializes the round:
  + Create world border
  + Add guests to whitelist
+ Event processor looks for all guests to join, then triggers start event
  + Turn off whitelist
  + Turn on time
  + Set difficulty to configured difficulty
  + Start timed event script
+ When one of the VIPs (Host or any guest) die:
  + Set VIP into spectator
  + Trigger post round events
+ When a viewer dies:
  + Ban viewer from remainder of round


## Timed event ideas

* Mob Swarms
* Food baskets
* Requiring tribute or sacrificing a player
* Escalating goals - Boss fights, etc.
* Create end portal

## Planned items

* Beam interactive integration
  * Trigger various timed events
  * Food
  * Mobs
  * Create custom spawners
* Everything on this page (just starting to build this, after all)

## What this won't do

No plans at this time to build any kind of mod to run the game mode.  This means that
any events need to be things that can be done via the server console.
