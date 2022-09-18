---
title: Remote text-editing on Edison with Atom
dateCreated: '2015-02-24'
---

## Introduction

Recently, I've started using [Atom](https://atom.io/), the open-source text editor from GitHub. Since it's billed as a "hackable text editor," many 3rd party packages have cropped up that provide additional features. An extremely useful one that I've discovered is [remote-atom](https://atom.io/packages/remote-atom), which allows remote editing via SSH port-forwarding.

So, what's the benefit? Well, now I can use my new favorite text editor instead of vi or nano to edit files on my Edison. Although the installation instructions are pretty straightforward from the remote-atom documentation, I thought I'd write more explicit ones for the Edison.

## Installing the Atom client on your PC

First, install Atom on your PC. Downloads are available for Mac, Windows, RedHat Linux, and Ubuntu Linux. For reference, my PC is a Mac, so I am unsure how much they differ on other platforms.

Next, install the remote-atom package. To do so, go to `Atom > Preferences > Install`, search for `remote-atom`, and click `Install`.

## Installing the remote Atom client on Edison

On your Edison, install the remote client, `rmate`, which is the same executable used for TextMate and Sublime:

```bash
curl -o /usr/bin/rmate https://raw.githubusercontent.com/aurora/rmate/master/rmate
chmod +x /usr/bin/rmate
```

Rename the file to `ratom`:

```bash
mv /usr/bin/rmate /usr/bin/ratom
```

## Usage

On your PC, go to `Packages > Remote Atom > Start Server`. Then, open a SSH connection to your Edison with port-forwarding:

```bash
ssh -R 52698:localhost:52698 root@myedison.local
```

where `myedison` is the name of your Edison. Note that port 52698 is the default port used when starting the server.

Create a file on your Edison and open it using `ratom`:

```bash
touch test.txt
ratom test.txt
```

You should now see the same file `test.txt` open on the Atom client on your PC.

Here's a snapshot with the Edison SSH window on the left and my Mac Atom client on the right:

![Remote text-editing on Edison with Atom](/images/edison/edison-atom-remote-text-editing.png)

To save time when connecting via SSH in the future, add the following to `~/.ssh/config` on your PC:

```vim
Host myedison.local
    RemoteForward 52698 localhost:52698
    User root
```

Now, you can connect using `ssh myedison.local`, which is a much shorter command!
