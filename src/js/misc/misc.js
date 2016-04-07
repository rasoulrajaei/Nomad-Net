var misc ={
    splitNoSpace: function(l){
        var ls=[];
        l.split(',').forEach(function(a){
            ls.push(a.replace(' ', ''))
        ;});
    },
    
    splitClean: function(l){
        var ls = l.replace(/[\s]*,[\s]*/ig,',') // removes spaces around commas.
        ls = ls.replace(/[\s]+/ig,' ') // replaces multiple spaces with a single space.
        if (ls[0]== ' '){
            ls = ls.slice(1,ls.length);
        }
        if (ls[ls.length-1]== ' '){
            ls = ls.slice(0,ls.length-1);
        }
        return ls.split(',');
    },
    
    makeNode: function(where,label, x,y,r,sides,style){
        
        console.log(label);
        new network.node(label, x,y,r,sides, style)
        var node = document.createElement("LI");
        var nodeA = document.createElement("A");
        //nodeA.href = '#';
        nodeA.setAttribute("onclick", "misc.showInfo($(this)[0])");//("data-bind", "click: showInfo");
        var textnode = document.createTextNode( label);
        nodeA.appendChild(textnode);
        nodeA.id = "n:"+label;
        node.appendChild(nodeA);    // Append the text to <li>
        var links = document.createElement("SPAN");
        links.id = "ls:"+label;
        links.innerHTML = 0;
        nodeA.appendChild(links);
        document.getElementById(where).appendChild(node);     // Append <li> to <ul>
        document.getElementById("nodeLabel").value = '';
        
    },
    
    showInfo: function(el){
        var node = network.nodes[el.id.slice(2)];
        var s = "";
        console.log('here');
        for (i in node.info){
            s += i+": "+node.info[i] +"<br>";
        }
        $('#info')[0].innerHTML = s;
        //console.log(s);
    }
}
