package DAY29.B1717;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    static class Node {
        String alpha;
        Node left;
        Node right;

        public Node(String alpha) {
            this.alpha = alpha;
        }
    }
    static class Tree {
        Node root;
        public void createNode(String alpha, String left, String right) {
            if(root ==  null) {
                root = new Node(alpha);
                root.left = left.equals(".") ? null : new Node(left);
                root.right = right.equals(".") ? null : new Node(right);
            }else{
                searchNode(root, alpha, left, right);
            }
        }

        public void searchNode(Node root, String alpha, String left, String right) {
            if(root == null){
                return;
            }else if(root.alpha.equals(alpha)) {
                root.left = left.equals(".") ? null : new Node(left);
                root.right = right.equals(".") ? null : new Node(right);
            }else {
                searchNode(root.left, alpha, left, right);
                searchNode(root.right, alpha, left, right);
            }
        }

        public void preOrder(Node node) {
            if(node != null) {
                System.out.print(node.alpha);
                if(node.left!=null) preOrder(node.left);
                if(node.right != null) preOrder(node.right);
            }
        }
        public void inOrder(Node node) {
            if(node != null) {
                if(node.left!=null) inOrder(node.left);
                System.out.print(node.alpha);
                if(node.right != null) inOrder(node.right);
            }
        }
        public void postOrder(Node node) {
            if(node != null) {
                if(node.left!=null) postOrder(node.left);
                if(node.right != null) postOrder(node.right);
                System.out.print(node.alpha);
            }

        }

    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int n = Integer.parseInt(br.readLine());
        Tree t = new Tree();

        for(int i=0;i<n;i++) {
            st = new StringTokenizer(br.readLine());
            t.createNode(st.nextToken(),st.nextToken(),st.nextToken());
        }

        t.preOrder(t.root);
        System.out.println();
        t.inOrder(t.root);
        System.out.println();
        t.postOrder(t.root);
    }
}
