package DAY30.B5639;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    static class Node {
        int num;
        Node left;
        Node right;

        public Node(int num) {
            this.num = num;
        }
    }

    static class Tree {
        Node root;
        public void createNode(int num) {
            if(root == null) {
                root = new Node(num);
                root.left = null;
                root.right = null;
            } else{
                searchNode(root, num);
            }

        }

        public void searchNode(Node node, int num) {
            if(node == null) return;
            if(node.num > num) {
                if(node.left == null) {
                    node.left = new Node(num);
                }else {
                    searchNode(node.left, num);
                }
            }else {
                if(node.right == null) {
                    node.right = new Node(num);
                }else {
                    searchNode(node.right, num);
                }
            }
        }

        public void postOrder(Node node) {
            if(node.left != null) postOrder(node.left);
            if(node.right != null) postOrder(node.right);
            System.out.println(node.num);
        }
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Tree t = new Tree();
        while(true) {
            String s = br.readLine();
            if(s == null || s.equals("")) break;
            int n = Integer.parseInt(s);
            t.createNode(n);
        }

        t.postOrder(t.root);

    }
}
