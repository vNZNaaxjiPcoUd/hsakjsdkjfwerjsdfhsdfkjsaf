# VI usual command

## In normal mode

- hjkl :direct step
- ^u,^d :page up / down
- gg :goto top
- G :goto end of file
- `:#` :jump to line #
- u :undo
- ^r :redo
- `:q` :quit
- `:w` :write
- dd :delete one line
- d#d :delete # lines
- x :detete char
- ^f :find file
- :?, :/ =search backward/forward
- :%s/$A/$B/gc =replace $A to $B
- `:terminal` : open a terminal window ( same ^w N )
    - ^w^w: back to normal mode
        - ^\ ^n :back to normail mode
    - i : back to terminal mode
    - `^w ""` : paste
    - `^w :` =goto command

## Tab

- :tabe =create new tab with $file
    - :tabe $FileName
- gt :next tab
- gT :previous tab
- #gt :goto # tab
- `:close` : close
    - ^w c :close
- :tab ball =show all buffer in tab

## Selection mode :Delete ,copy & paste

1. v :enter selection mode
    1. V :enter linewise selection mode
    2. ^v : enter block selection mode
2. h, j, k and l :to move left, down, up, right respectively
3. d :cut (delete)
4. y :copy (yank)
5. p :paste

## Split

- ^W,
    - s :create a horizontal split.
    - v :create a vertical split.
    - jkhl :switch split
        - also ^jkhl same
        - also direction key
    - ,+ :horizental smaller/bigger
    - <,> :vertical smaller/bigger
    - `:resize x` :horizental size change
        - `res +/-x` : add or decress horizental size
    - `:vertical resize x` :vertical size change to x
        - `:vertical resze +x` : vertical size add x
    - | :maximum vertical
    - _ :maximum horizental
    - = :equal all size
    - r,R :swap
    - T :current to new window
    - c :close split
    - o :close all split except current

## In insert mode

- alt-u :undo
- alt-jkhl :move direct

## New & Open

- :e $FileName =edit file
- :new =create a new file
- :ls =list all opened files
- :ls will show your open buffers.
    - :buffers =as :ls
- :b $number =open the specified buffer in the current pane.
- :b $FileNamePrefix =open relative file buffer
- :bn =buffer next
- :bp =buffer previous

## Search & Replace(substitute)

- :s/foo/bar/g :substitute
Find each occurrence of 'foo' (in the ***current line only***), and replace it with 'bar'.
- :%s/foo/bar/g
Find each occurrence of 'foo' (in ***all*** lines), and replace it with 'bar'.
- :%s/foo/bar/gc
Change each 'foo' to 'bar', but ***ask*** for confirmation first.
- :%s/\<foo\>/bar/gc
Change only whole words ***exactly matching*** 'foo' to 'bar'; ask for confirmation.
- :%s/foo/bar/gci
Change each 'foo' (***case insensitive*** due to the i flag) to 'bar'; ask for confirmation.
- :%s/foo\c/bar/gc is the same because \c makes the search ***case insensitive***.
This may be wanted after using :set noignorecase to make searches case sensitive (the default).
- :%s/foo/bar/gcI
Change each 'foo' (case sensitive due to the I flag) to 'bar'; ask for confirmation.
- :%s/foo\C/bar/gc is the same because \C makes the search case sensitive.
This may be wanted after using :set ignorecase to make searches case insensitive.

## You Complete Me

In insert mode

- ^p :basic tab completion, pulling from a variety of sources
- ^n :the same as ^P but backward
- ^X ^L	:whole line completion
- ^X ^O	:syntax-aware omnicompletion

## NerdTree

- ,nn :toggle tool
- `:NERDTree` :open this tool
- `:NERDTreeClose` :close
- t :open the file in a new tab.
- o :open the file in a new buffer or open/close directory.
- i :open the file in a new horizontal split.
- s :open the file in a new vertical split.
- p :go to parent directory.
- r :refresh the current directory.
- I: Toggle hidden files
- m: Show the NERD Tree menu
- R: Refresh the tree, useful if files change outside of Vim
- ?: Toggle NERD Tree's quick help

## Other

- ^- :smaller font
- ^+ :lager font
- :w =write
- :q =quit
- :map : show all mappings
- :nmap for normal mode mappings
- :vmap for visual mode mappings
- :imap for insert mode mappings

## other

In .vimrc

- `set nu` :show line number

## Install commands as:

```
    git clone --depth=1 https://github.com/amix/vimrc.git ~/.vim_runtime
    sh ~/.vim_runtime/install_awesome_vimrc.sh

```

## ps:Copy from easynote(vi)

## Included Plugins

I recommend reading the docs of these plugins to understand them better. Each plugin provides a much better Vim experience!

- [ack.vim](https://github.com/mileszs/ack.vim): Vim plugin for `the_silver_searcher` (ag) or ack -- a wicked fast grep
- [bufexplorer.zip](https://github.com/vim-scripts/bufexplorer.zip): Quickly and easily switch between buffers. This plugin can be opened with `<leader+o>`
- [ctrlp.vim](https://github.com/ctrlpvim/ctrlp.vim): Fuzzy file, buffer, mru and tag finder. It's mapped to `<Ctrl+F>`
- [goyo.vim](https://github.com/junegunn/goyo.vim) and [vim-zenroom2](https://github.com/amix/vim-zenroom2):
- [lightline.vim](https://github.com/itchyny/lightline.vim): A light and configurable statusline/tabline for Vim
- [NERD Tree](https://github.com/preservim/nerdtree): A tree explorer plugin for vim
- [open_file_under_cursor.vim](https://github.com/amix/open_file_under_cursor.vim): Open file under cursor when pressing `gf`
- [pathogen.vim](https://github.com/tpope/vim-pathogen): Manage your vim runtimepath
- [snipmate.vim](https://github.com/garbas/vim-snipmate): snipmate.vim aims to be a concise vim script that implements some of TextMate's snippets features in Vim
- [ale](https://github.com/dense-analysis/ale): Syntax and lint checking for vim (ALE requires NeoVim >= 0.2.0 or Vim 8 with +timers +job +channel)
- [vim-commentary](https://github.com/tpope/vim-commentary): Comment stuff out. Use `gcc` to comment out a line (takes a count), `gc` to comment out the target of a motion. `gcu` uncomments a set of adjacent commented lines.
- [vim-expand-region](https://github.com/terryma/vim-expand-region): Allows you to visually select increasingly larger regions of text using the same key combination
- [vim-fugitive](https://github.com/tpope/vim-fugitive): A Git wrapper so awesome, it should be illegal
- [vim-indent-object](https://github.com/michaeljsmith/vim-indent-object): Defines a new text object representing lines of code at the same indent level. Useful for python/vim scripts
- [vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors): Sublime Text style multiple selections for Vim, CTRL+N is remapped to CTRL+S (due to YankRing)
- [vim-yankstack](https://github.com/maxbrunsfeld/vim-yankstack): Maintains a history of previous yanks, changes and deletes
- [vim-zenroom2](https://github.com/amix/vim-zenroom2) Remove all clutter and focus only on the essential. Similar to iA Writer or Write Room
- [gist-vim](https://github.com/mattn/gist-vim) Easily create gists from Vim using the `:Gist` command
- [vim-indent-guides](https://github.com/nathanaelkane/vim-indent-guides) Is a plugin for visually displaying indent levels in Vim
- [editorconfig-vim](https://github.com/editorconfig/editorconfig-vim) EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

## Included color schemes

- [peaksea](https://github.com/vim-scripts/peaksea): The default
- [dracula](https://github.com/dracula/vim)
- [vim-colors-solarized](https://github.com/altercation/vim-colors-solarized)
- [vim-irblack](https://github.com/wgibbs/vim-irblack)
- [mayansmoke](https://github.com/vim-scripts/mayansmoke)
- [vim-pyte](https://github.com/therubymug/vim-pyte)

## Included modes

- [vim-coffee-script](https://github.com/kchmck/vim-coffee-script)
- [vim-less](https://github.com/groenewege/vim-less)
- [vim-bundle-mako](https://github.com/sophacles/vim-bundle-mako)
- [vim-markdown](https://github.com/plasticboy/vim-markdown)
- [nginx.vim](https://github.com/vim-scripts/nginx.vim): Highlights configuration files for nginx
- [rust.vim](https://github.com/rust-lang/rust.vim)
- [vim-ruby](https://github.com/vim-ruby/vim-ruby)
- [typescript-vim](https://github.com/leafgarland/typescript-vim)
- [vim-javascript](https://github.com/pangloss/vim-javascript)
- [vim-python-pep8-indent](https://github.com/Vimjas/vim-python-pep8-indent)

## How to include your own stuff?

After you have installed the setup, you can create **~/.vim_runtime/my_configs.vim** to fill in any configurations that are important for you. For instance, my **my_configs.vim** looks like this:

```
~/.vim_runtime (master)> cat my_configs.vim
map <leader>ct :cd ~/Desktop/Todoist/todoist<cr>
map <leader>cw :cd ~/Desktop/Wedoist/wedoist<cr>

```

You can also install your plugins, for instance, via pathogen you can install [vim-rails](https://github.com/tpope/vim-rails):

```
cd ~/.vim_runtime
git clone git://github.com/tpope/vim-rails.git my_plugins/vim-rails

```

You can also install plugins without any plugin manager (vim 8+ required):
Add `packloadall` to your .vimrc file
Create pack plugin directory:`mkdir -p ~/.vim/pack/plugins/start`
Clone the plugin that you want in that directory, for example:`git clone --depth=1 git://github.com/maxmellon/vim-jsx-pretty  ~/.vim/pack/plugins/vim-jsx-pretty`

## Key Mappings

The [leader](http://learnvimscriptthehardway.stevelosh.com/chapters/06.html#leader) is `,`, so whenever you see `<leader>` it means `,`.

## Normal mode mappings

Fast saving of a buffer (`<leader>w`):

```
nmap <leader>w :w!<cr>

```

Map `<Space>` to `/` (search) and `<Ctrl>+<Space>` to `?` (backwards search):

```
map <space> /
map <C-space> ?
map <silent> <leader><cr> :noh<cr>

```

Disable highlights when you press `<leader><cr>`:

```
map <silent> <leader><cr> :noh<cr>

```

Smart way to move between windows (`<ctrl>j` etc.):

```
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l

```

Closing of the current buffer(s) (`<leader>bd` and (`<leader>ba`)):

```
" Close current buffer
map <leader>bd :Bclose<cr>

" Close all buffers
map <leader>ba :1,1000 bd!<cr>

```

Useful mappings for managing tabs:

```
map <leader>tn :tabnew<cr>
map <leader>to :tabonly<cr>
map <leader>tc :tabclose<cr>
map <leader>tm :tabmove

" Opens a new tab with the current buffer's path
" Super useful when editing files in the same directory
map <leader>te :tabedit <C-r>=expand("%:p:h")<cr>/

```

Switch [CWD](http://vim.wikia.com/wiki/Set_working_directory_to_the_current_file) to the directory of the open buffer:

```
map <leader>cd :cd %:p:h<cr>:pwd<cr>

```

Open `ack.vim` for fast search:

```
map <leader>g :Ack

```

Quickly open a buffer for scripbble:

```
map <leader>q :e ~/buffer<cr>

```

Toggle paste mode on and off:

```
map <leader>pp :setlocal paste!<cr>

```

## Visual mode mappings

Visual mode pressing `*` or `#` searches for the current selection:

```
vnoremap <silent> * :call VisualSelection('f')<CR>
vnoremap <silent> # :call VisualSelection('b')<CR>

```

When you press gv you `Ack.vim` after the selected text:

```
vnoremap <silent> gv :call VisualSelection('gv', '')<CR>

```

When you press `<leader>r` you can search and replace the selected text:

```
vnoremap <silent> <leader>r :call VisualSelection('replace')<CR>

```

Surround the visual selection in parenthesis/brackets/etc.:

```
vnoremap $1 <esc>`>a)<esc>`<i(<esc>
vnoremap $2 <esc>`>a]<esc>`<i[<esc>
vnoremap $3 <esc>`>a}<esc>`<i{<esc>
vnoremap $$ <esc>`>a"<esc>`<i"<esc>
vnoremap $q <esc>`>a'<esc>`<i'<esc>
vnoremap $e <esc>`>a`<esc>`<i`<esc>

```

## Insert mode mappings

Quickly insert parenthesis/brackets/etc.:

```
inoremap $1 ()<esc>i
inoremap $2 []<esc>i
inoremap $3 {}<esc>i
inoremap $4 {<esc>o}<esc>O
inoremap $q ''<esc>i
inoremap $e ""<esc>i
inoremap $t <><esc>i

```

Insert the current date and time (useful for timestamps):

```
iab xdate <C-r>=strftime("%d/%m/%y %H:%M:%S")<cr>

```

## Command line mappings

$q is super useful when browsing on the command line. It deletes everything until the last slash:

```
cno $q <C-\\>eDeleteTillSlash()<cr>

```

Bash like keys for the command line:

```
cnoremap <C-A>		<Home>
cnoremap <C-E>		<End>
cnoremap <C-K>		<C-U>

cnoremap <C-P> <Up>
cnoremap <C-N> <Down>

```

Write the file as sudo (works only on Unix). Super useful when you open a file and you don't have permissions to save your changes. [Vim tip](http://vim.wikia.com/wiki/Su-write):

```
:W

```

## Plugin related mappings

Open [bufexplorer](https://github.com/vim-scripts/bufexplorer.zip) to see and manage the current buffers (`<leader>o`):

```
map <leader>o :BufExplorer<cr>

```

Open [ctrlp.vim](https://github.com/kien/ctrlp.vim) plugin to quickly find a file or a buffer (`<leader>j` or `<ctrl>f`):

```
" Quickly find and open a file in the CWD
let g:ctrlp_map = '<C-f>'

" Quickly find and open a recently opened file
map <leader>f :MRU<CR>

" Quickly find and open a buffer
map <leader>b :CtrlPBuffer<cr>

```

[NERD Tree](https://github.com/preservim/nerdtree) mappings:

```
map <leader>nn :NERDTreeToggle<cr>
map <leader>nb :NERDTreeFromBookmark
map <leader>nf :NERDTreeFind<cr>

```

[goyo.vim](https://github.com/junegunn/goyo.vim) and [vim-zenroom2](https://github.com/amix/vim-zenroom2) lets you only focus on one thing at a time. It removes all the distractions and centers the content. It has a special look when editing Markdown, reStructuredText and textfiles. It only has one mapping. (`<leader>z`)

```
map <leader>z :Goyo<cr>

```

[vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors) mappings to manage multiple cursors at once:

```
let g:multi_cursor_start_word_key      = '<C-s>'
let g:multi_cursor_select_all_word_key = '<A-s>'
let g:multi_cursor_start_key           = 'g<C-s>'
let g:multi_cursor_select_all_key      = 'g<A-s>'
let g:multi_cursor_next_key            = '<C-s>'
let g:multi_cursor_prev_key            = '<C-p>'
let g:multi_cursor_skip_key            = '<C-x>'
let g:multi_cursor_quit_key            = '<Esc>'

```

[vim-yankstack](https://github.com/maxbrunsfeld/vim-yankstack) mappings to manage the kill-ring (clipboard):

```
nmap <C-p> <Plug>yankstack_substitute_older_paste
nmap <C-n> <Plug>yankstack_substitute_newer_paste

```

[ctrl-p](https://github.com/ctrlpvim/ctrlp.vim) mappings to easily find and open a file, buffer, etc.:

```
let g:ctrlp_map = '<C-f>'
map <leader>j :CtrlP<cr>
map <C-b> :CtrlPBuffer<cr>

```

[vim-snipmate](https://github.com/garbas/vim-snipmate) mappings to autocomplete via snippets:

```
ino <C-j> <C-r>=snipMate#TriggerSnippet()<cr>
snor <C-j> <esc>i<right><C-r>=snipMate#TriggerSnippet()<cr>

```

[vim-surround](https://github.com/tpope/vim-surround) mappings to easily surround a string with `_()` gettext annotation:

```
vmap Si S(i_<esc>f)
au FileType mako vmap Si S"i${ _(<esc>2f"a) }<esc>

```

[ale](https://github.com/dense-analysis/ale) to easily go to the next Ale syntax/lint error:

```
nmap <silent> <leader>a <Plug>(ale_next_wrap)

```

[vim-indent-guides](https://github.com/nathanaelkane/vim-indent-guides) the default mapping to toggle the plugin is (`<leader>ig`)

```
You can also use the following commands inside Vim:
:IndentGuidesEnable
:IndentGuidesDisable
:IndentGuidesToggle

```

[vim-fugitive](https://github.com/tpope/vim-fugitive) to copy the link to the line of a Git repository to the clipboard:

```
nnoremap <leader>v :.GBrowse!<CR>
xnoremap <leader>v :'<'>GBrowse!<CR>

```

## Spell checking

Pressing `<leader>ss` will toggle spell checking:

```
map <leader>ss :setlocal spell!<cr>

```

Shortcuts using `<leader>` instead of special characters:

```
map <leader>sn ]s
map <leader>sp [s
map <leader>sa zg
map <leader>s? z=

```

## Running Code

To run code directly from vim, press `F5`. The currently open code will execute without you having to type anything.

Can be used to execute code written in C, C++, Java, Python, Go, Octave, Bash scripts and HTML. To edit how you want your code to be executed, make changes in the file

```
~/vim_runtime/vimrcs/extended.vim

```

## Cope

Query `:help cope` if you are unsure what cope is. It's super useful!

When you search with `Ack.vim`, display your results in cope by doing:
`<leader>cc`

To go to the next search result do:
`<leader>n`

To go to the previous search results do:
`<leader>p`

Cope mappings:

```
map <leader>cc :botright cope<cr>
map <leader>co ggVGy:tabnew<cr>:set syntax=qf<cr>pgg
map <leader>n :cn<cr>
map <leader>p :cp<cr>

```

## How to uninstall

Just do following:

- Remove `~/.vim_runtime`
- Remove any lines that reference `.vim_runtime` in your `~/.vimrc`
